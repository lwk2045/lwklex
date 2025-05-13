document.addEventListener('DOMContentLoaded', function() {
    // 상담 신청 폼 제출 처리
    const consultationForm = document.getElementById('consultation-form');
    if (consultationForm) {
        consultationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(consultationForm);
            const data = Object.fromEntries(formData.entries());
            
            // 카카오톡 메시지 생성
            const message = `[상담 신청]\n\n이름: ${data.name}\n연락처: ${data.phone}\n문의사항: ${data.message}`;
            
            // 카카오톡 링크 생성
            const kakaoLink = `https://open.kakao.com/leeasying?message=${encodeURIComponent(message)}`;
            
            // 새 창에서 카카오톡 열기
            window.open(kakaoLink, '_blank');
            
            // 폼 초기화
            consultationForm.reset();
            
            // 성공 메시지 표시
            alert('상담 신청이 완료되었습니다. 카카오톡으로 연결됩니다.');
        });
    }

    // 개인회생/파산 상담 폼 제출 처리
    const bankruptcyForm = document.getElementById('bankruptcy-form');
    if (bankruptcyForm) {
        bankruptcyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(bankruptcyForm);
            const data = Object.fromEntries(formData.entries());
            
            // 부채, 수입, 자산 정보를 기반으로 개인회생/파산 가능성 분석
            const debt = parseFloat(data.debt) || 0;
            const income = parseFloat(data.income) || 0;
            const assets = parseFloat(data.assets) || 0;

            let result = analyzeBankruptcy(debt, income, assets);
            alert(result);
            bankruptcyForm.reset();
        });
    }

    // 모바일 메뉴 토글 기능
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'md:hidden p-2';
    mobileMenuButton.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
    `;

    const nav = document.querySelector('nav');
    if (nav) {
        nav.insertBefore(mobileMenuButton, nav.firstChild);
        
        mobileMenuButton.addEventListener('click', function() {
            const menu = document.querySelector('.hidden.md\\:flex');
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
            menu.classList.toggle('flex-col');
            menu.classList.toggle('absolute');
            menu.classList.toggle('top-16');
            menu.classList.toggle('left-0');
            menu.classList.toggle('w-full');
            menu.classList.toggle('bg-white');
            menu.classList.toggle('p-4');
        });
    }
});

// 개인회생/파산 가능성 분석 함수
function analyzeBankruptcy(debt, income, assets) {
    // 기본적인 분석 로직
    let message = '분석 결과:\n\n';
    
    // 부채 대비 수입 비율 계산
    const debtToIncomeRatio = debt / (income * 12);
    
    if (debtToIncomeRatio > 3) {
        message += '현재 부채가 연간 수입의 3배를 초과하여 개인회생/파산 절차를 고려해볼 수 있습니다.\n';
    } else {
        message += '현재 부채 상태는 개인회생/파산 절차가 필요하지 않을 수 있습니다.\n';
    }

    // 자산 대비 부채 비율 계산
    const debtToAssetRatio = debt / assets;
    if (debtToAssetRatio > 1) {
        message += '부채가 자산을 초과하고 있어 개인회생/파산 절차가 도움이 될 수 있습니다.\n';
    }

    message += '\n※ 이는 기본적인 분석이며, 실제 상담을 통해 더 정확한 판단이 가능합니다.';
    return message;
} 