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
         description: "DirectX11 기반 자체 엔진으로 구현한 New Super Lucky's Tale 모작 포트폴리오입니다. 게임 클라이언트 개발 전반의 이해를 목표로 프로젝트를 진행했습니다",
         features: [
             "DirectX11 기반 자체 엔진 및 핵심 시스템 설계",
             "ImGui 기반 Map Tool (오브젝트, Navigation) 제작",
             "캐릭터 핵심 조작, 전투 로직 및 Gimmick Object 구현",
             "Instancing 및 Frustum Culling 렌더링 최적화"
         ],
         links: [
             { text: "GitHub", url: "https://github.com/Jinniepoo/D3D11_NSLT3D", primary: false }
         ],
         bannerImage: ["https://cdn1.epicgames.com/d3288d6aaf794eb4821bab4c5ba08a0a/offer/EGS_NewSuperLuckysTale_PlayfulStudios_S5-1920x1080-87e8ef98b49a1fe926a9d83639de0a3a.jpg"],
         richContent: `<div class="modal-rich-details">

        <div class="modal-feature-section">
                 <h3>1. 캐릭터 핵심 조작 및 전투 로직</h3>
                 <div class="modal-feature-row reverse">
                     <div class="text-content">
                         <h4>3D 플랫포머 환경에서의 정교한 조작 구현 및 넉백 기반 전투 시스템</h4>
                         <p><strong>문제 정의:</strong> 3D 환경에서 캐릭터 이동, 점프, 꼬리 공격 등 핵심 메커니즘을 구현하고, 물리 기반의 피격 및 넉백 시스템을 적용하여 게임 플레이의 재미를 확보해야 했습니다.</p>
                         <p><strong>문제 해결 방법:</strong> DirectX11 자체 엔진에서 AABB/OBB 충돌 체크를 기반으로 공격을 감지하고, <strong>포물선 공식</strong> 및 애니메이션 상태 머신을 이용해 전투를 연출했습니다.</p>
                         <p><strong>해결 과정:</strong> 꼬리 공격 시 충돌 감지 후, 몬스터 피격 시 1차 애니메이션(어지러움)을 재생합니다. 2차 공격 시에는 <strong>포물선 공식 기반 넉백</strong>을 적용하여 몬스터를 Dead 처리했습니다. Burrow Mode 로직을 통해 지면 내 아이템 수집 및 파티클 연출을 구현했습니다.</p>
                     </div>
                     <img src="https://raw.githubusercontent.com/Jinniepoo/D3D11_NSLT3D/main/GitImages/Player_MonsterAtt.gif" alt="몬스터 2차 공격 및 넉백 처리 GIF" />
                 </div>
             </div>
             
             <div class="modal-feature-section">
                 <h3>2. 퀘스트 메커니즘 및 파츠 연결 시스템</h3>
                 <div class="modal-feature-row">
                     <div class="text-content">
                         <h4>Golem Head 파츠를 수집하고 Player PartObject에 동적 연결하는 연출 구현</h4>
                         <p><strong>문제 정의:</strong> 단순 전투 외에 아이템 수집 후 캐릭터의 특정 파츠에 연결하여 퀘스트를 진행하는 연출 및 로직 구현이 필요했습니다.</p>
                         <p><strong>문제 해결 방법:</strong> Golem Head를 Loot Object로 처리하고, Player의 Hand PartObject에 Attach/Detach 로직을 구현하여 해결했습니다.</p>
                         <p><strong>해결 과정:</strong> 플레이어가 GolemHead와 충돌하여 획득하면, Head Mesh를 Player Armature의 Hand 노드에 부착(Attach)합니다. 이를 통해 Head가 움직임에 따라 자연스럽게 따라다니며 퀘스트 진행 상황을 시각적으로 보여주고, 아이템 수집 후에는 해당 Object를 제거했습니다.</p>
                     </div>
                     <img src="https://raw.githubusercontent.com/Jinniepoo/D3D11_NSLT3D/main/GitImages/Player_AttachGolemHead.gif" alt="Golem Head 파츠 연결 GIF" />
                 </div>
             </div>
             
             <div class="modal-feature-section">
                 <h3>3. ImGui 기반 Map Tool 제작 (오브젝트 편집)</h3>
                 <div class="modal-feature-row reverse">
                     <div class="text-content">
                         <h4>인게임 환경에서 오브젝트 배치, 편집, 디버깅을 위한 도구 개발</h4>
                         <p><strong>문제 정의:</strong> 레벨 디자인과 디버깅 편의성을 위해 인게임 내에서 오브젝트의 위치, 회전, 스케일을 즉시 편집하고 결과를 확인할 수 있는 전용 도구가 필요했습니다.</p>
                         <p><strong>문제 해결 방법:</strong> ImGui 라이브러리를 활용하여 툴 UI를 구성하고, 선택된 오브젝트의 <strong>World Matrix를 직접 조작</strong>하는 기능을 구현했습니다.</p>
                         <p><strong>해결 과정:</strong> ImGui의 슬라이더(Slider) 및 인풋 필드를 이용해 선택된 오브젝트의 World Matrix를 실시간으로 업데이트합니다. 또한 코인, 클로버 등의 Collectibles을 툴에서 삭제/배치하고, 이들의 회전 애니메이션 및 점수 증가 로직을 연동하여 레벨 디자인 효율을 높였습니다.</p>
                     </div>
                     <img src="https://raw.githubusercontent.com/Jinniepoo/D3D11_NSLT3D/main/GitImages/MapTool_ObjectPosition.gif" alt="Map Tool 오브젝트 위치 편집 GIF" />
                 </div>
             </div>

             <div class="modal-feature-section">
                 <h3>4. Map Tool - Navigation 시스템 및 픽셀 피킹</h3>
                 <div class="modal-feature-row">
                     <div class="text-content">
                         <h4>AI 경로 탐색을 위한 Cell 생성 및 마우스 기반 월드 좌표 계산 로직</h4>
                         <p><strong>문제 정의:</strong> 몬스터 AI가 이동할 수 있는 영역(Cell)을 사용자가 직접 생성해야 했으며, 마우스 클릭 지점의 정확한 3D 월드 좌표를 얻어야 했습니다.</p>
                         <p><strong>문제 해결 방법:</strong> <strong>픽셀 피킹(Pixel Picking) 기법</strong>으로 마우스 좌표를 3D 좌표로 변환하고, 삼각형 Cell의 <strong>시계방향(Clockwise) 정렬 로직</strong>을 구현하여 데이터의 안정성을 확보했습니다.</p>
                         <p><strong>해결 과정:</strong> 마우스 클릭 시 Depth/Normal 버퍼를 이용하여 픽셀 피킹을 수행, 월드 좌표를 획득합니다. Cell 생성 시, 3개의 포인트를 입력받아 <strong>벡터 외적</strong>을 통해 정점 순서를 검사하고 필요 시 교환하여 시계방향 정렬을 보장했습니다. 또한, <strong>Snap 기능</strong>을 구현하여 이미 존재하는 포인트에 자동으로 연결되도록 개발 편의성을 높였습니다.</p>
                     </div>
                     <img src="https://raw.githubusercontent.com/Jinniepoo/D3D11_NSLT3D/main/GitImages/MapTool_Navigation.gif" alt="Map Tool Navigation 시스템 GIF" />
                 </div>
             </div>
             
             <div class="modal-feature-section">
                 <h3>5. Gimmick Object 및 환경 상호작용</h3>
                 <div class="modal-feature-row reverse">
                     <div class="text-content">
                         <h4>점프 패드, 체크포인트, 이벤트 게이트 등 게임 환경의 역동성을 높이는 기믹 구현</h4>
                         <p><strong>문제 정의:</strong> 점프 패드, 체크포인트, 이벤트 게이트 등 게임 플레이에 변화를 주는 기믹 오브젝트의 로직과 연출을 구현해야 했습니다.</p>
                         <p><strong>문제 해결 방법:</strong> 오브젝트별 고유한 충돌 이벤트 리스너와 상태 변화 로직을 설계하여 적용했습니다.</p>
                         <p><strong>해결 과정:</strong> <strong>점프 패드</strong>: 플레이어 충돌 시 Bouncing 효과 및 스케일 변화 연출. <strong>체크포인트</strong>: 진입 시 이펙트/애니메이션 실행. <strong>게이트</strong>: Blender에서 직접 피벗 포인트를 조절한 모델을 불러와 회전 구현. <strong>미로 벨</strong>: 이벤트 트리거를 통해 벽의 지진 효과와 이동 연출을 구현했습니다.</p>
                     </div>
                     <img src="https://raw.githubusercontent.com/Jinniepoo/D3D11_NSLT3D/main/GitImages/Gimmich_SpringMushroom2.gif" alt="점프 패드 및 체크포인트 GIF" />
                 </div>
             </div>
             
             <div class="modal-feature-section">
                 <h3>6. Monster AI 및 렌더링 최적화</h3>
                 <div class="modal-feature-row">
                     <div class="text-content">
                         <h4>단순 상태 머신 기반의 추적 AI와 Instancing/Frustum Culling 최적화</h4>
                         <p><strong>문제 정의:</strong> 몬스터가 플레이어를 감지하고 추적/공격하는 기본적인 AI 로직을 구현하고, 다수 오브젝트 렌더링으로 인한 성능 저하를 개선해야 했습니다.</p>
                         <p><strong>문제 해결 방법:</strong> 단순 <strong>상태 머신(State Machine)</strong> 패턴을 적용하여 AI를 구현하고, 렌더링 파이프라인에 최적화 기법을 도입했습니다.</p>
                         <p><strong>해결 과정:</strong> 몬스터의 상태(Idle / 추적 / 공격 / 피격)를 FSM으로 관리하여 유기적인 동작을 구현했습니다. 렌더링 최적화를 위해 <strong>Instancing 기반 렌더링</strong>을 적용하여 다수 오브젝트의 Draw Call을 줄였으며, <strong>Frustum Culling</strong>을 통해 화면에 보이지 않는 오브젝트의 렌더링을 제거하여 성능을 개선했습니다.</p>
                     </div>
                     <img src="https://raw.githubusercontent.com/Jinniepoo/D3D11_NSLT3D/main/GitImages/Monster_TrackPlayer.gif" alt="몬스터 추적 AI GIF" />
                 </div>
             </div>
             `
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
        links: [
            { text: "YouTube", url: "https://www.youtube.com/watch?v=lGg6B_-HBl8", primary: true }
        ],
        bannerImage: ["https://img.youtube.com/vi/lGg6B_-HBl8/maxresdefault.jpg"],
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
        links: [
            { text: "GitHub", url: "https://github.com/Jinniepoo/Unity3D_Undervein", primary: false }
        ],
        bannerImage: ["https://raw.githubusercontent.com/Jinniepoo/Unity3D_Undervein/main/Packages/GitImages/Undervein.png"],
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
        
        bannerImage: [ "https://raw.githubusercontent.com/Jinniepoo/PastelBlocks/main/Imgs/PastelBlocks_Intro.png",
                       "https://raw.githubusercontent.com/Jinniepoo/PastelBlocks/main/Imgs/PastelBlocks_GamePlay.png"
        ],
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
                        <p><strong>문제 정의:</strong> 9x9 그리드에 블록의 모양과 크기에 관계없이 정확히 배치하고, 회전된 모양도 유효성을 실시간으로 검사하여 오배치를 방지해야 했습니다.</p>
                        <p><strong>문제 해결 방법:</strong> Grid Data Array를 통해 그리드 상태를 관리하고, 블록의 모양을 정의하는 Shape Data와 대조하는 CanPlaceShape 로직을 핵심으로 구현했습니다.</p>
                        <p><strong>해결 과정:</strong> 2차원 배열로 그리드 상태를 관리하고, 블록 드래그 시 마우스 위치와 블록 모양 배열을 대조하여 배치 가능 여부를 실시간으로 판단합니다. 마우스 오버 시 미리보기(Hover Block)를 제공하여 UX를 개선했습니다.</p>
                    </div>
                    <img src="https://raw.githubusercontent.com/Jinniepoo/PastelBlocks/main/Imgs/Horizontal.gif" alt="Horizontal 블록 완성 GIF" />
                </div>
            </div>
            
            <div class="modal-feature-section">
                <h3>2. 블록 생성 및 관리 로직</h3>
                <div class="modal-feature-row reverse">
                    <div class="text-content">
                        <h4>ShapeStorage를 활용한 효율적인 3개 블록 세트 관리 및 막혔을 때의 리셋 시스템</h4>
                        <p><strong>문제 정의:</strong> 플레이어에게 항상 3개의 블록 세트를 제공하고, 이 세트 내 모든 블록이 배치 불가능할 때 게임 오버 대신 새로운 블록을 요청할 수 있는 기능(리셋 시스템)이 필요했습니다.</p>
                        <p><strong>문제 해결 방법:</strong> ShapeStorage 클래스로 Queue 방식의 블록 관리 시스템을 구축하고, RequestNewShape 시스템을 통해 블록 큐를 리셋하는 로직을 구현했습니다.</p>
                        <p><strong>해결 과정:</strong> ShapeData Scriptable Object를 이용하여 블록 모양/색상 데이터를 분리하고, ShapeStorage가 3개의 블록을 추적합니다. 모든 블록이 배치 불가능 상태일 때, 버튼 클릭 등 조건 하에 RequestNewShape() 함수를 호출하여 현재 큐를 버리고 새로운 3개 세트로 교체하여 게임의 지속성을 높였습니다.</p>
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
                <div class="modal-feature-row reverse">
                    <div class="text-content">
                        <h4>Unity PlayerPrefs와 Binary Serialization을 조합한 안전하고 영구적인 최고 점수 데이터 Persistence</h4>
                        <p><strong>문제 정의:</strong> 사용자의 최고 점수를 로컬 환경에 영구적으로 저장하고 불러와야 하며, 데이터의 안정성을 확보해야 했습니다.</p>
                        <p><strong>문제 해결 방법:</strong> 간단한 데이터 저장은 Unity PlayerPrefs를 사용하고, 중요 데이터인 최고 점수는 Binary Serialization을 조합하여 데이터 지속성(Persistence)을 구현했습니다.</p>
                        <p><strong>해결 과정:</strong> BinaryData 유틸리티 클래스를 통해 최고 점수 데이터를 바이너리 파일로 직렬화하여 영구 저장합니다. 게임 시작 시 파일을 로드하고, 게임 중 실시간 점수를 PlayerPrefs에 임시 저장 후 최고 점수 갱신 시 바이너리 파일에 최종 저장하여 데이터 변조 위험을 낮추었습니다.</p>
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

    let linksHtml = project.links.map(link => {
        const btnClass = link.primary ? 'btn-primary' : 'btn-secondary';
        return `<a href="${link.url}" class="btn ${btnClass}" target="_blank">${link.text}</a>`;
    }).join('');

    let summaryImageHtml = '';
    if (project.bannerImage.length > 0) {
        summaryImageHtml = `
            <div class="left-column-image-wrapper">
                ${project.bannerImage.map(src => `
                    <img src="${src}" alt="${project.title} 대표 이미지" class="project-summary-image single-left-image">
                `).join('')}
            </div>
        `;
    }

    const featuresHtml = project.features.map(f => `<li>${f}</li>`).join('');

    let leftColumnHtml = `
        <div class="project-left-column">
            <h1 style="font-size: 2.2rem; margin-bottom: 5px; color: white;">
                ${project.title}<br>
                <span style="font-size: 1rem; color: var(--text-color-darker); font-weight: 400;">
                    (${project.subtitle})
                </span>
            </h1>

            ${summaryImageHtml}

            <div class="project-links" style="margin-top: 20px;">
                ${linksHtml}
            </div>
        </div>
    `;

    let rightTextColumnHtml = `
        <div class="project-right-column">
            <p style="font-size: 1.1rem; line-height: 1.8; margin-top: 10px; color: var(--text-color); margin-bottom: 20px;">
                ${project.description}
            </p>

            <h4>주요 기능 및 기여</h4>
            <ul>${featuresHtml}</ul>
        </div>
    `;

    let mainSummaryHtml = `
        <div class="new-modal-layout">
            ${leftColumnHtml}
            ${rightTextColumnHtml}
        </div>
    `;

    let richDetailsHtml = '';
    if (project.richContent) {
        richDetailsHtml = `
            <hr style="border-top: 1px solid var(--border-color); margin: 30px 0;">
            ${project.richContent}
        `;
    }

    content.innerHTML = `
        ${mainSummaryHtml}
        ${richDetailsHtml}
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
