
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
/* NSLT */
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
/* NMH3 */
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
/* UNDERVEIN */
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
        ],
        richContent: `<div class="modal-rich-details">

    <div class="modal-feature-section">
        <h3>1. 캐릭터 조작 및 이동 시스템</h3>
        <div class="modal-feature-row">
            <div class="text-content">
                <h4>직관적 조작감과 시각적 피드백을 갖춘 3인칭 탑다운 컨트롤 시스템</h4>
                <p><strong>문제 정의:</strong> 3D Top-Down 시점에서 마우스 클릭만으로 캐릭터를 부드럽게 이동시키고, 유저의 목표 지정을 시각적으로 명확하게 전달해야 했습니다.</p>
                <p><strong>문제 해결 방법:</strong> Unity NavMeshAgent와 Mouse Raycast를 결합하여 이동 로직을 설계하고, Reticle UI를 통해 피드백을 제공했습니다. </p>
                <p><strong>해결 과정:</strong> 마우스 클릭 시 Mouse Raycast를 바닥에 쏘아 목표 지점의 3D 좌표를 획득합니다. NavMeshAgent 컴포넌트의 SetDestination() 함수를 사용하여 캐릭터를 해당 좌표로 이동시키며, 이동 중에는 애니메이션 컨트롤러를 통해 MoveState로 전환하고 목표 지점에 Reticle UI를 표시합니다.</p>
            </div>
            <img src="https://raw.githubusercontent.com/Jinniepoo/Unity3D_Undervein/main/Packages/GitImages/ClickUI.gif" alt="탑다운 마우스 Raycast 기반 캐릭터 이동 GIF" />
        </div>
    </div>
    
    <div class="modal-feature-section">
        <h3>2. FSM (Finite State Machine) 및 AI 전투</h3>
        <div class="modal-feature-row reverse">
            <div class="text-content">
                <h4>재사용 가능한 FSM 기반의 플레이어/몬스터 AI 및 전투 로직</h4>
                <p><strong>문제 정의:</strong> 플레이어와 몬스터가 대기/이동/공격/사망 등의 상태를 유기적으로 전환하며 복잡한 전투 및 순찰 행동을 수행해야 했습니다.</p>
                <p><strong>문제 해결 방법:</strong> FSM 패턴을 핵심 구조로 채택하여 상태별 로직을 분리하고, NavMeshAgent를 활용하여 몬스터의 순찰/추적 경로를 구현했습니다.</p>
                <p><strong>해결 과정:</strong> IdleState, MoveState, AttackState, DeadState 등 상태 클래스를 정의하여 공통 로직을 관리했습니다. 몬스터는 Waypoint를 따라 순찰하다가, 시야 범위(Detection Range) 내에 플레이어가 감지되면 추적으로 전환합니다. 공격 거리에 도달하면 AttackState로 전환하여 거리 기반 공격을 수행하고 이펙트를 연동했습니다.</p>
            </div>
            <img src="https://raw.githubusercontent.com/Jinniepoo/Unity3D_Undervein/main/Packages/GitImages/MonsterAtt.gif" alt="FSM 기반 몬스터 공격 및 전투 GIF" />
        </div>
    </div>

    <div class="modal-feature-section">
        <h3>3. 장비 교체 시스템 (Skinned Mesh)</h3>
        <div class="modal-feature-row">
            <div class="text-content">
                <h4>Blender 커스텀 Skinned Mesh 제작 및 Armature 재활용을 통한 장비 장착 시스템</h4>
                <p><strong>문제 정의:</strong> 무료 에셋의 한계를 극복하고, 장비 교체 시 캐릭터 모델의 일부(예: 신발, 갑옷)가 애니메이션에 따라 변형되어야 하는 Skinned Mesh 형태로 자연스럽게 교체되는 시스템 구현이 필요했습니다.</p>
                <p><strong>문제 해결 방법:</strong> Blender에서 장비 파츠를 직접 제작하고, Unity에서 기존 캐릭터의 Armature(Bone)를 재활용하여 부착하는 방식으로 문제를 해결했습니다.</p>
                <p><strong>해결 과정:</strong> Blender에서 신규 장비 모델을 제작 후, 기존 캐릭터 모델의 Armature 정보를 유지하며 장비를 바인딩했습니다. 게임 내에서 장비 장착 시, 해당 Skinned Mesh Prefab을 캐릭터 Armature의 적절한 위치에 인스턴스화(Instantiate)하여 교체를 구현했습니다. 또한 무기 Mesh 등은 Armature에 수작업으로 연결하여 동작 시 자연스러움을 확보했습니다.</p>
            </div>
            <img src="https://raw.githubusercontent.com/Jinniepoo/Unity3D_Undervein/main/Packages/GitImages/EquipSkinned.gif" alt="Skinned Mesh 장비 교체 GIF" />
        </div>
    </div>

    <div class="modal-feature-section">
        <h3>4. 인벤토리 및 아이템 관리</h3>
        <div class="modal-feature-row reverse">
            <div class="text-content">
                <h4>Scriptable Object를 활용한 효율적인 아이템 데이터 관리 및 인벤토리 시스템</h4>
                <p><strong>문제 정의:</strong> 장비, 소비 아이템 등 다양한 종류의 아이템 데이터를 효율적으로 관리하고, 아이템의 습득 및 사용(소비) 로직을 명확하게 분리하여 구현해야 했습니다.</p>
                <p><strong>문제 해결 방법:</strong> Scriptable Object를 사용하여 아이템 데이터를 에셋으로 관리하고, 충돌 기반의 자동 습득 로직 및 우클릭 소비 로직을 구현했습니다.</p>
                <p><strong>해결 과정:</strong> 장비 및 소비 아이템 데이터를 Scriptable Object로 정의하여 유니티 에디터에서 쉽게 관리했습니다. 바닥에 떨어진 아이템은 플레이어와 충돌 시 자동으로 인벤토리에 추가되며, Consumable Item은 인벤토리 UI에서 우클릭 사용 시 체력 회복 등 지정된 Stats을 즉시 증가시키는 로직을 적용했습니다. </p>
            </div>
            <img src="https://raw.githubusercontent.com/Jinniepoo/Unity3D_Undervein/main/Packages/GitImages/LootItems.gif" alt="아이템 습득 및 소비 GIF" />
        </div>
    </div>
    
    <div class="modal-feature-section">
        <h3>5. NPC 대화 시스템</h3>
        <div class="modal-feature-row">
            <div class="text-content">
                <h4>플레이어 Targeting 및 거리 감지 기반의 자연스러운 NPC 상호작용 및 대화 연출</h4>
                <p><strong>문제 정의:</strong> NPC와 플레이어 간의 상호작용이 자연스럽게 시작되도록 타이밍을 제어하고, 대화 중에는 UI와 NPC 애니메이션이 연동되도록 구현해야 했습니다.</p>
                <p><strong>문제 해결 방법:</strong> 마우스 Raycast를 활용한 NPC Targeting 기능과 거리 감지 로직을 결합하여 대화 시작 조건을 구현했습니다.</p>
                <p><strong>해결 과정:</strong> 특정 NPC를 우클릭으로 Targeting 후, 플레이어가 지정된 거리까지 이동하면 대화가 시작됩니다. 대화 시작 시 대화창 UI를 열고 애니메이션을 연동하여, 몰입감을 높이는 자연스러운 연출을 구현했습니다.</p>
            </div>
            <img src="https://raw.githubusercontent.com/Jinniepoo/Unity3D_Undervein/main/Packages/GitImages/NPC.gif" alt="NPC 대화 시스템 GIF" />
        </div>
    </div>
    
</div>`
    },
/* PASTELBLOCKS */
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
            { text: "GitHub", url: "https://github.com/Jinniepoo/PastelBlocks", primary: true }
        ],
        richContent: `
        <div class="modal-rich-details">

            <div class="modal-feature-section">
                <h3>1. 그리드 기반 블록 배치 시스템</h3>
                <div class="modal-feature-row">
                    <div class="text-content">
                        <h4>2차원 배열과 Shape Data를 활용한 정확하고 효율적인 블록 배치 및 유효성 검사 로직</h4>
                        <p><strong>문제 정의:</strong> 10x10 그리드에 블록의 모양과 크기에 관계없이 정확히 배치하고, 회전된 모양도 유효성을 실시간으로 검사하여 오배치를 방지해야 했습니다.</p>
                        <p><strong>문제 해결 방법:</strong> Grid Data Array를 통해 그리드 상태를 관리하고, 블록의 모양을 정의하는 Shape Data와 대조하는 CanPlaceShape 로직을 핵심으로 구현했습니다.</p>
                        <p><strong>해결 과정:</strong> 2차원 배열로 그리드 상태를 관리하고, 블록 드래그 시 마우스 위치와 블록 모양 배열을 대조하여 배치 가능 여부를 실시간으로 판단합니다. 마우스 오버 시 미리보기(Hover Block)를 제공하여 UX를 개선했습니다.</p>
                    </div>
                    <img src="https://raw.githubusercontent.com/Jinniepoo/PastelBlocks/main/Imgs/Horizontal.gif" alt="Horizontal 블록 완성 GIF" />
                </div>
            </div>
            
            <div class="modal-feature-section">
                <h3>2. 블록 생성 및 관리 로직</h3>
                <div class="modal-feature-row">
                    <div class="text-content">
                        <h4>ShapeStorage를 활용한 효율적인 3개 블록 세트 관리 및 막혔을 때의 리셋 시스템</h4>
                        <p><strong>문제 정의:</strong> 플레이어에게 항상 3개의 블록 세트를 제공하고, 이 세트 내 모든 블록이 배치 불가능할 때 게임 오버 대신 새로운 블록을 요청할 수 있는 기능(리셋 시스템)이 필요했습니다.</p>
                        <p><strong>문제 해결 방법:</strong> ShapeStorage 클래스로 Queue 방식의 블록 관리 시스템을 구축하고, RequestNewShape 시스템을 통해 블록 큐를 리셋하는 로직을 구현했습니다.</p>
                        <p><strong>해결 과정:</strong> \`ShapeData\` Scriptable Object를 이용하여 블록 모양/색상 데이터를 분리하고, \`ShapeStorage\`가 3개의 블록을 추적합니다. 모든 블록이 배치 불가능 상태일 때, 버튼 클릭 등 조건 하에 \`RequestNewShape\` 함수를 호출하여 현재 큐를 버리고 새로운 3개 세트로 교체하여 게임의 지속성을 높였습니다.</p>
                </div>
                <img src="https://raw.githubusercontent.com/Jinniepoo/PastelBlocks/main/Imgs/RequestNewShape.gif" alt= "블록 리셋 시스템 GIF" />
            </div>

            <div class="modal-feature-section">
                <h3>3. 점수 보너스 시스템</h3>
                <div class="modal-feature-row">
                    <div class="text-content">
                        <h4>BonusManager를 통한 Combo 및 Multi-Clear 인식을 통한 보너스 점수 시스템 </h4>
                        <p><strong>문제 정의:</strong> 단순 줄 제거 점수 외에, 연속적인 제거(Combo) 및 한 번에 여러 줄 제거(Multi-Clear)에 대한 동적인 추가 보너스 점수 로직이 필요했습니다.</p>
                        <p><strong>문제 해결 방법:</strong> BonusManager를 활용하여 Chain Count 시스템을 추적하고, 제거된 라인 수 기반의 점수 승수를 적용하는 로직을 구현했습니다.</p>
                        <p><strong>해결 과정:</strong> 라인 제거 성공 시마다 Chain Count를 증가시키고, 기본 점수에 승수를 적용하여 보너스 점수를 차등 지급했습니다. 한 번의 배치로 여러 줄이 제거되면 라인 수에 비례한 Multi-Clear Bonus를 합산하여 최종 점수를 산출합니다.</p>
                </div>
                <img src="https://raw.githubusercontent.com/Jinniepoo/PastelBlocks/main/Imgs/Horizontal.gif" alt="Bonus 시스템 GIF" />
            </div>

            <div class="modal-feature-section">
                <h3>4. 최고 점수 기록 및 데이터 저장</h3>
                <div class="modal-feature-row">
                    <div class="text-content">
                        <h4>Unity PlayerPrefs와 Binary Serialization을 조합한 안전하고 영구적인 최고 점수 데이터 Persistence</h4>
                        <p><strong>문제 정의:</strong> 사용자의 최고 점수를 로컬 환경에 영구적으로 저장하고 불러와야 하며, 데이터의 안정성을 확보해야 했습니다.</p>
                        <p><strong>문제 해결 방법:</strong> 간단한 데이터 저장은 Unity PlayerPrefs를 사용하고, 중요 데이터인 최고 점수는 Binary Serialization을 조합하여 데이터 지속성(Persistence)을 구현했습니다.</p>
                        <p><strong>해결 과정:</strong> \`BinaryData\` 유틸리티 클래스를 통해 최고 점수 데이터를 바이너리 파일로 직렬화하여 영구 저장합니다. 게임 시작 시 파일을 로드하고, 게임 중 실시간 점수를 PlayerPrefs에 임시 저장 후 최고 점수 갱신 시 바이너리 파일에 최종 저장하여 데이터 변조 위험을 낮추었습니다.</p>
                </div>
                <img src="https://raw.githubusercontent.com/Jinniepoo/PastelBlocks/main/Imgs/GameOver.gif" alt="GameOver GIF" />
            </div>
        </div>`
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

    let techHtml = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
    let linksHtml = project.links.map(link => {
        const btnClass = link.primary ? 'btn-primary' : 'btn-secondary';
        return `<a href="${link.url}" class="btn ${btnClass}" target="_blank">${link.text}</a>`;
    }).join('');
    
    let mainContent;
    let titleContent;
    
    if (projectId === 'PastelBlocks') {
        
        titleContent = `
            <h1 style="font-size: 2.2rem; margin-bottom: 5px; color: white;">${project.title} <span style="font-size: 1rem; color: var(--text-color-darker); font-weight: 400;">(${project.subtitle})</span></h1>
        `;
        
        const featuresHtml = project.features.map(f => `<li>${f}</li>`).join('');
        
        mainContent = `
            <div class="pastel-summary-container">
                <div class="pastel-summary-left">
                    <p style="font-size: 1.1rem; line-height: 1.8; margin-top: 10px; color: var(--text-color);">
                        ${project.description}
                    </p>
                </div>
                <div class="pastel-summary-right">
                    <h4>주요 기능 및 기여</h4>
                    <ul>${featuresHtml}</ul>
                </div>
            </div>
            
            <hr style="border-top: 1px solid var(--border-color); margin: 30px 0;">

            ${project.richContent}
        `;
    
    } else if (project.richContent) {
        
        titleContent = `
            <h2>${project.title}</h2>
            <p class="project-subtitle" style="margin-bottom: 20px;">${project.subtitle}</p>
            <p style="line-height: 1.7; margin-bottom: 30px;">${project.description}</p>
        `;
        
        mainContent = project.richContent;

    } else {
        
        let featuresHtml = project.features.map(f => `<li>${f}</li>`).join('');
        
        titleContent = `
            <h2>${project.title}</h2>
            <p class="project-subtitle" style="margin-bottom: 20px;">${project.subtitle}</p>
            <p style="line-height: 1.7; margin-bottom: 30px;">${project.description}</p>
        `;
        
        mainContent = `
            <h3 class="modal-feature-title">주요 기능 및 기여</h3>
            <ul>${featuresHtml}</ul>
        `;
    }

    content.innerHTML = `
        ${titleContent}
        
        ${mainContent}

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
