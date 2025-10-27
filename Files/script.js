// DOM이 로드된 후 스크립트 실행
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. 모바일 네비게이션 토글 (햄버거 버튼)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // 네비게이션 링크 클릭 시 모바일 메뉴 닫기
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // 2. 부드러운 스크롤 (네비게이션 링크 클릭 시)
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // 외부 링크가 아닌 내부 앵커(#) 링크일 때만 작동
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    // 네비게이션 바 높이(70px)를 고려하여 스크롤
                    const offsetTop = targetSection.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 3. 스킬 바 애니메이션 (화면에 보일 때)
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-bar');
        
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // 스킬 바가 화면의 80% 지점에 도달하면
            if (rect.top <= windowHeight * 0.8) {
                const level = bar.getAttribute('data-level');
                bar.style.width = level + '%';
            }
        });
    }

    // 4. 스크롤에 따른 페이드-인(Fade-in) 애니메이션
    const observerOptions = {
        threshold: 0.1, // 요소가 10% 보일 때
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // 스킬 섹션이 보이면 스킬 바 애니메이션 실행
                if (entry.target.id === 'skills') {
                    animateSkillBars();
                }
            }
        });
    }, observerOptions);

    // 애니메이션 적용할 요소들 선택
    const animatedElements = document.querySelectorAll('section, .project-card, .skill-item');
    animatedElements.forEach(el => {
        el.classList.add('fade-in'); // 기본 클래스 추가
        observer.observe(el); // 관찰 시작
    });

    // 5. 스크롤 시 네비게이션 바 배경 업데이트 (선택 사항)
    function updateNavbarBackground() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }

    window.addEventListener('scroll', updateNavbarBackground);
    window.addEventListener('scroll', animateSkillBars); // 스크롤할 때마다 스킬 바 체크

    console.log('포트폴리오 스크립트 로드 완료!');
});
