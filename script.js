
document.addEventListener('DOMContentLoaded', function() {
    
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-bar');
        
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top <= windowHeight * 0.8) {
                const level = bar.getAttribute('data-level');
                bar.style.width = level + '%';
            }
        });
    }

    const observerOptions = {
        threshold: 0.1, 
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                if (entry.target.id === 'skills') {
                    animateSkillBars();
                }
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('section, .project-card, .skill-item');
    animatedElements.forEach(el => {
        el.classList.add('fade-in'); 
        observer.observe(el); 
    });

    function updateNavbarBackground() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(26, 26, 26, 0.95)'; 
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    } else {
        navbar.style.background = 'rgba(26, 26, 26, 0.85)';
        navbar.style.boxShadow = 'none';
    }
}

    window.addEventListener('scroll', updateNavbarBackground);
    window.addEventListener('scroll', animateSkillBars); 

    console.log('포트폴리오 스크립트 로드 완료!');
});

const projectDetails = {
    'NSLT': {
        title: "New Super Lucky's Tale",
        subtitle: "DirectX11 개인 프로젝트",
        description: "DirectX11 기반의 3D 플랫폼 액션 게임 모작 프로젝트입니다. 플레이어가 게임 세계에 완전히 몰입할 수 있도록 안정적이고 효율적인 클라이언트 시스템을 구축하는 데 중점을 두었습니다.",
        features: [
            "카메라, 캐릭터 컨트롤러 및 충돌 시스템 구현",
            "ImGui 기반 맵 에디터 구현 (오브젝트 배치, 이동, 회전, 스케일링)",
            "3D Navigation Mesh를 활용한 AI 경로 탐색 시스템",
            "상호작용형 레벨 Gimmick 설계 및 구현",
            "Instancing 및 Frustum Culling을 활용한 렌더링 최적화"
        ],
        tech: ["C++", "DirectX11", "HLSL", "Blender"],
        links: [
            { text: "GitHub", url: "https://github.com/Jinniepoo/D3D11_NSLT3D", primary: false }
        ]
    },
    'NMH3': {
        title: "No More Heroes 3",
        subtitle: "DirectX11 팀 프로젝트",
        description: "DirectX11을 사용하여 제작된 액션 RPG 게임 모작 팀 프로젝트입니다. 게임 엔진의 핵심 기능들을 이해하고 공동 개발 환경에서 효율적으로 작업하는 경험을 쌓았습니다. 저는 맵 에디터와 레벨 최적화, UI 시스템 구현에 주로 기여했습니다.",
        features: [
            "ImGui 기반 맵 에디터 및 맵 데이터 관리 시스템 구현",
            "레벨 디자인을 위한 Gimmick Object 시스템 설계",
            "Navigation Mesh를 활용한 몬스터 AI 구현",
            "Pixel Picking을 이용한 오브젝트 선택 및 편집 기능",
            "Frustum Culling 및 LOD 적용을 통한 렌더링 부하 최적화"
        ],
        tech: ["C++", "DirectX11", "HLSL"],
        links: [
            { text: "YouTube", url: "https://www.youtube.com/watch?v=lGg6B_-HBl8", primary: true }
        ]
    },
    'Undervein': {
        title: "Undervein",
        subtitle: "Unity6 개인 프로젝트",
        description: "Unity 3D 환경에서 개발된 Top-Down Action RPG 프로젝트입니다. C# 스크립팅을 사용하여 게임의 핵심 시스템을 설계하고 구현하며 Unity 엔진의 사용 능력을 심화했습니다.",
        features: [
            "탑다운 3D 캐릭터 컨트롤러 및 애니메이션 시스템",
            "State Machine 기반 AI 및 전투 시스템 (피격 판정, 스킬 구현)",
            "아이템/인벤토리 및 장비 장착 해제 시스템 (Scriptable Object 활용)",
            "NPC 상호작용 및 퀘스트 관리 시스템",
            "Shuriken Particle System을 활용한 이펙트 연출"
        ],
        tech: ["C#", "Unity3D", "Unity6", "Blender"],
        links: [
            { text: "GitHub", url: "https://github.com/Jinniepoo/Unity3D_Undervein", primary: false }
        ]
    },
    'PastelBlocks': {
        title: "PastelBlocks",
        subtitle: "Unity6 개인 프로젝트",
        description: "블록을 배치하여 점수를 획득하는 캐주얼 퍼즐 게임입니다. Unity의 2D/UI 시스템을 활용하여 모바일 환경에 적합한 직관적인 사용자 인터페이스를 구현하는 데 중점을 두었습니다.",
        features: [
            "그리드 기반 블록 배치 및 회전 시스템",
            "다양한 모양의 블록 생성 및 관리 로직",
            "최고 점수 기록 및 Unity PlayerPrefs를 이용한 데이터 저장",
            "연속 블록 제거에 따른 보너스 점수 시스템"
        ],
        tech: ["C#", "Unity"],
        links: [
            { text: "GitHub", url: "https://github.com/Jinniepoo/PastelBlocks", primary: false }
        ]
    }
};

function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const content = document.getElementById('modal-details-content');
    const project = projectDetails[projectId];

    if (!project) {
        console.error("Project details not found for ID:", projectId);
        return;
    }

    let featuresHtml = project.features.map(f => `<li>${f}</li>`).join('');
    let techHtml = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
    let linksHtml = project.links.map(link => {
        const btnClass = link.primary ? 'btn-primary' : 'btn-secondary';
        return `<a href="${link.url}" class="btn ${btnClass}" target="_blank">${link.text}</a>`;
    }).join('');

    content.innerHTML = `
        <h2>${project.title}</h2>
        <p class="project-subtitle" style="margin-bottom: 20px;">${project.subtitle}</p>
        <p style="line-height: 1.7; margin-bottom: 30px;">${project.description}</p>
        
        <h3 class="modal-feature-title">주요 기능 및 기여</h3>
        <ul>${featuresHtml}</ul>

        <h3 class="modal-tech-title" style="margin-top: 20px;">기술 스택</h3>
        <div class="project-tech">${techHtml}</div>
        
        <div class="project-links" style="margin-top: 30px; border-top: 1px solid var(--border-color); padding-top: 20px;">
            ${linksHtml}
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; 
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; 
}

window.openModal = openModal;
window.closeModal = closeModal;

window.addEventListener('click', (event) => {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
});
