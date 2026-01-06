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
                <h4>3D 플랫포머 환경에서의 정교한 조작 구현 및 넉백 기반 전투 시스템</h4>
                 <div class="modal-feature-row reverse">
                     <div class="text-content">
                         <p><strong>[문제 정의]</strong> 3D 환경에서 캐릭터 이동, 점프, 꼬리 공격 등 핵심 메커니즘을 구현하고, 물리 기반의 피격 및 넉백 시스템을 적용하여 게임 플레이의 재미를 확보해야 했습니다.</p>
                         <p><strong>[해결 방법]</strong> DirectX11 자체 엔진에서 AABB/OBB 충돌 체크를 기반으로 공격을 감지하고, <strong>포물선 공식</strong> 및 애니메이션 상태 머신을 이용해 전투를 연출했습니다.</p>
                         <p><strong>[해결 과정]</strong> 꼬리 공격 시 충돌 감지 후, 몬스터 피격 시 1차 애니메이션(어지러움)을 재생합니다. 2차 공격 시에는 <strong>포물선 공식 기반 넉백</strong>을 적용하여 몬스터를 Dead 처리했습니다. Burrow Mode 로직을 통해 지면 내 아이템 수집 및 파티클 연출을 구현했습니다.</p>
                     </div>
                     <img src="https://raw.githubusercontent.com/Jinniepoo/D3D11_NSLT3D/main/GitImages/Player_MonsterAtt.gif" alt="몬스터 2차 공격 및 넉백 처리 GIF" />
                 </div>
             </div>
             
             <div class="modal-feature-section">
                 <h3>2. 퀘스트 메커니즘 및 파츠 연결 시스템</h3>
                         <h4>Golem Head 파츠를 수집하고 Player PartObject에 동적 연결하는 연출 구현</h4>
                 <div class="modal-feature-row">
                     <div class="text-content">
                         <p><strong>[문제 정의]</strong> 단순 전투 외에 아이템 수집 후 캐릭터의 특정 파츠에 연결하여 퀘스트를 진행하는 연출 및 로직 구현이 필요했습니다.</p>
                         <p><strong>[해결 방법]</strong> Golem Head를 Loot Object로 처리하고, Player의 Hand PartObject에 Attach/Detach 로직을 구현하여 해결했습니다.</p>
                         <p><strong>[해결 과정]</strong> 플레이어가 GolemHead와 충돌하여 획득하면, Head Mesh를 Player Armature의 Hand 노드에 부착(Attach)합니다. 이를 통해 Head가 움직임에 따라 자연스럽게 따라다니며 퀘스트 진행 상황을 시각적으로 보여주고, 아이템 수집 후에는 해당 Object를 제거했습니다.</p>
                     </div>
                     <img src="https://raw.githubusercontent.com/Jinniepoo/D3D11_NSLT3D/main/GitImages/Player_AttachGolemHead.gif" alt="Golem Head 파츠 연결 GIF" />
                 </div>
             </div>
             
             <div class="modal-feature-section">
                 <h3>3. ImGui 기반 Map Tool 제작 (오브젝트 편집)</h3>
                         <h4>인게임 환경에서 오브젝트 배치, 편집, 디버깅을 위한 도구 개발</h4>
                 <div class="modal-feature-row reverse">
                     <div class="text-content">
                         <p><strong>[문제 정의]</strong> 레벨 디자인과 디버깅 편의성을 위해 인게임 내에서 오브젝트의 위치, 회전, 스케일을 즉시 편집하고 결과를 확인할 수 있는 전용 도구가 필요했습니다.</p>
                         <p><strong>[해결 방법]</strong> ImGui 라이브러리를 활용하여 툴 UI를 구성하고, 선택된 오브젝트의 <strong>World Matrix를 직접 조작</strong>하는 기능을 구현했습니다.</p>
                         <p><strong>[해결 과정]</strong> ImGui의 슬라이더(Slider) 및 인풋 필드를 이용해 선택된 오브젝트의 World Matrix를 실시간으로 업데이트합니다. 또한 코인, 클로버 등의 Collectibles을 툴에서 삭제/배치하고, 이들의 회전 애니메이션 및 점수 증가 로직을 연동하여 레벨 디자인 효율을 높였습니다.</p>
                     </div>
                     <img src="https://raw.githubusercontent.com/Jinniepoo/D3D11_NSLT3D/main/GitImages/MapTool_ObjectPosition.gif" alt="Map Tool 오브젝트 위치 편집 GIF" />
                 </div>
             </div>

             <div class="modal-feature-section">
                 <h3>4. Map Tool - Navigation 시스템 및 픽셀 피킹</h3>
                         <h4>AI 경로 탐색을 위한 Cell 생성 및 마우스 기반 월드 좌표 계산 로직</h4>
                 <div class="modal-feature-row">
                     <div class="text-content">
                         <p><strong>[문제 정의]</strong> 몬스터 AI가 이동할 수 있는 영역(Cell)을 사용자가 직접 생성해야 했으며, 마우스 클릭 지점의 정확한 3D 월드 좌표를 얻어야 했습니다.</p>
                         <p><strong>[해결 방법]</strong> <strong>픽셀 피킹(Pixel Picking) 기법</strong>으로 마우스 좌표를 3D 좌표로 변환하고, 삼각형 Cell의 <strong>시계방향(Clockwise) 정렬 로직</strong>을 구현하여 데이터의 안정성을 확보했습니다.</p>
                         <p><strong>[해결 과정]</strong> 마우스 클릭 시 Depth/Normal 버퍼를 이용하여 픽셀 피킹을 수행, 월드 좌표를 획득합니다. Cell 생성 시, 3개의 포인트를 입력받아 <strong>벡터 외적</strong>을 통해 정점 순서를 검사하고 필요 시 교환하여 시계방향 정렬을 보장했습니다. 또한, <strong>Snap 기능</strong>을 구현하여 이미 존재하는 포인트에 자동으로 연결되도록 개발 편의성을 높였습니다.</p>
                     </div>
                     <img src="https://raw.githubusercontent.com/Jinniepoo/D3D11_NSLT3D/main/GitImages/MapTool_Navigation.gif" alt="Map Tool Navigation 시스템 GIF" />
                 </div>
             </div>
             
             <div class="modal-feature-section">
                 <h3>5. Gimmick Object 및 환경 상호작용</h3>
                         <h4>점프 패드, 체크포인트, 이벤트 게이트 등 게임 환경의 역동성을 높이는 기믹 구현</h4>
                 <div class="modal-feature-row reverse">
                     <div class="text-content">
                         <p><strong>[문제 정의]</strong> 점프 패드, 체크포인트, 이벤트 게이트 등 게임 플레이에 변화를 주는 기믹 오브젝트의 로직과 연출을 구현해야 했습니다.</p>
                         <p><strong>[해결 방법]</strong> 오브젝트별 고유한 충돌 이벤트 리스너와 상태 변화 로직을 설계하여 적용했습니다.</p>
                         <p><strong>[해결 과정]</strong> <strong>점프 패드</strong>: 플레이어 충돌 시 Bouncing 효과 및 스케일 변화 연출. <strong>체크포인트</strong>: 진입 시 이펙트/애니메이션 실행. <strong>게이트</strong>: Blender에서 직접 피벗 포인트를 조절한 모델을 불러와 회전 구현. <strong>미로 벨</strong>: 이벤트 트리거를 통해 벽의 지진 효과와 이동 연출을 구현했습니다.</p>
                     </div>
                     <img src="https://raw.githubusercontent.com/Jinniepoo/D3D11_NSLT3D/main/GitImages/Gimmich_SpringMushroom2.gif" alt="점프 패드 및 체크포인트 GIF" />
                 </div>
             </div>
             
             <div class="modal-feature-section">
                 <h3>6. Monster AI 및 렌더링 최적화</h3>
                         <h4>단순 상태 머신 기반의 추적 AI와 Instancing/Frustum Culling 최적화</h4>
                 <div class="modal-feature-row">
                     <div class="text-content">
                         <p><strong>[문제 정의]</strong> 몬스터가 플레이어를 감지하고 추적/공격하는 기본적인 AI 로직을 구현하고, 다수 오브젝트 렌더링으로 인한 성능 저하를 개선해야 했습니다.</p>
                         <p><strong>[해결 방법]</strong> 단순 <strong>상태 머신(State Machine)</strong> 패턴을 적용하여 AI를 구현하고, 렌더링 파이프라인에 최적화 기법을 도입했습니다.</p>
                         <p><strong>[해결 과정]</strong> 몬스터의 상태(Idle / 추적 / 공격 / 피격)를 FSM으로 관리하여 유기적인 동작을 구현했습니다. 렌더링 최적화를 위해 <strong>Instancing 기반 렌더링</strong>을 적용하여 다수 오브젝트의 Draw Call을 줄였으며, <strong>Frustum Culling</strong>을 통해 화면에 보이지 않는 오브젝트의 렌더링을 제거하여 성능을 개선했습니다.</p>
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
            { text: "GitHub", url: "https://github.com/Jinniepoo/Unity6_Undervein3D", primary: false }
        ],
        bannerImage: ["https://raw.githubusercontent.com/Jinniepoo/Unity6_Undervein3D/blob/main/GitImages/Undervein.png"],
        richContent: `<div class="modal-rich-details">

    <div class="modal-feature-section">
    <h3>1. 캐릭터 조작 및 이동 시스템</h3>
    <h4>FSM 기반 상태 제어와 NavMesh 연동을 통한 Top-Down 캐릭터 이동 시스템 구현</h4>

    <p><strong>Top-Down 3D 시점</strong>에서 플레이어가 <strong>마우스 입력</strong>만으로 자연스럽게
        <strong>이동 및 상호작용</strong>할 수 있는 <strong>조작 시스템</strong>이 필요했습니다.</p>
        <p>단순한 위치 이동을 넘어, <strong>이동/정지/공격/상호작용 상태</strong>가 충돌하지 않고
        <strong>유기적으로 전환</strong>되며, 애니메이션 및 시각적 피드백이
        <strong>일관되게 유지</strong>되는 구조를 목표로 했습니다.</p>

    <div class="tab-container">
        <div class="tab-header">
            <button class="tab-btn active" data-tab="solution">해결 방법</button>
            <button class="tab-btn" data-tab="detail">구현 상세</button>
        </div>

        <div id="solution" class="tab-content active">
            <p>
                입력 처리, 이동 로직, 상태 전환 책임을 명확히 분리한
                <strong>FSM 기반 캐릭터 제어 구조</strong>를 설계했습니다.
            </p>

            <div class="modal-feature-row">
                <div class="text-content">

                    <p class="feature-line">
                        <span class="feature-title">입력 처리</span>
                        <span class="feature-desc">
                            Unity New Input System을 사용하여 입력 이벤트를 명확히 분리
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">이동 처리</span>
                        <span class="feature-desc">
                            NavMeshAgent를 기반으로 경로 탐색을 담당하게 하고, 실제 이동은
                            <i>CharacterController</i>를 통해 수동 제어
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">상태 처리</span>
                        <span class="feature-desc">
                            Idle / Move / Attack 상태를 FSM으로 관리하여 이동 중 공격, UI 상호작용 등 상태 충돌을 방지
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">피드백</span>
                        <span class="feature-desc">
                            클릭 지점 및 타겟을 Reticle 오브젝트로 시각화하여 플레이어의 의도를 명확히 전달
                        </span>
                    </p>

                </div>

                <img src="https://raw.githubusercontent.com/Jinniepoo/Unity6_Undervein3D/main/GitImages/ClickUI.gif"
                     alt="탑다운 마우스 이동 GIF" />
            </div>
        </div>

        <div id="detail" class="tab-content scrollable">
            <div class="modal-feature-row">
                <div class="text-content">
                    <p class="feature-line">
                        <span class="feature-title">입력 → 상태 전환</span>
                        마우스 입력은 UI 상호작용 여부를 우선적으로 판단한 뒤 처리되며, 좌클릭은 이동 명령, 우클릭은 공격 또는 상호작용 타겟 지정으로 분리했습니다.
                    </p>

                    <p>- 이동 입력 시 NavMeshAgent의 SetDestination()을 호출하여 경로를 계산</p>
                    <p>- 공격 상태(AttackState)에 진입한 경우에는 이동 입력을 차단하여 상태 충돌 방지</p>
                    <p>- 타겟 지정 시 공격 거리 또는 상호작용 거리 기준으로 자동 이동 및 상태 전환 처리</p>
                    <br>

                    <p class="feature-line">
                        <span class="feature-title"><strong>NavMeshAgent + CharacterController 병행 사용</strong></span>
                        좌클릭은 이동 명령, 우클릭은 공격 또는 상호작용 타겟 지정으로 분리했습니다.
                    </p>
                    <p>- NavMeshAgent의 updatePosition을 비활성화</p>
                    <p>- Agent가 계산한 속도 벡터를 CharacterController.Move()로 직접 적용하는 구조를 사용했습니다.</p>
                    <br>

                    <p> 이를 통해: Root Motion 동기화, 정지/가속 시 애니메이션 블렌딩 제어, 이동/애니메이션 책임 분리를 동시에 만족할 수 있었습니다.</p>

                    <br>
                    <p class="feature-line">
                        <span class="feature-title">FSM 기반 상태 관리</span>
                        <p>캐릭터는 FSM을 통해 상태를 관리하며, 각 상태는 명확한 책임을 가지도록 구현했습니다.</p>
                        <p><strong>- IdleState:</strong>   대기 상태에서 타겟 감지 또는 입력 발생 시 다음 상태로 전환</p>
                        <p><strong>- MoveState:</strong>   NavMeshAgent를 통해 목표 지점 또는 타겟 위치로 이동</p>
                        <p>도착 조건 만족 시 Idle 또는 Attack 상태로 전환</p>
                        <p><strong>- AttackState:</strong>애니메이션 타이밍과 연동된 공격 처리</p>
                        <p>-공격 중 이동 입력 차단</p>
                    </p>
                    <p> 이 구조를 통해 Update 함수 내 조건 분기를 최소화하고, 상태 추가 및 수정 시 다른 로직에 영향을 주지 않도록 설계했습니다.</p>
                    <p><strong></strong></p>
                    <br>

                    <p class="feature-line">
                    <span class="feature-title">결과</span>
                    <p>- 이동, 공격, 상호작용이 충돌 없이 자연스럽게 이어지는 Top-Down 조작 시스템 완성</p>
                    <p>- FSM 기반 구조로 AI 및 몬스터 이동 로직과의 구조적 일관성 확보</p>
                    <p>- 상태 추가 및 확장이 용이한 캐릭터 제어 아키텍처 구축</p>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

    
    <div class="modal-feature-section">
    <h3>2. FSM (Finite State Machine) 및 AI 전투</h3>
    <h4>재사용 가능한 FSM 기반의 플레이어 / 몬스터 AI 및 전투 로직</h4>

    <p>
        플레이어와 몬스터가 <strong>대기 / 이동 / 공격 / 사망</strong> 상태를
        상황에 따라 자연스럽게 전환하며,
        <strong>전투 및 순찰 AI</strong>를 수행해야 했습니다.
    </p>

    <p>
        단순 조건 분기가 아닌,
        <strong>확장 가능한 구조</strong>로 상태를 관리하여
        플레이어와 몬스터 양쪽에
        <strong>재사용 가능한 전투 아키텍처</strong>를 구축하는 것이 목표였습니다.
    </p>

    <div class="tab-container">
        <div class="tab-header">
            <button class="tab-btn active" data-tab="solution2">해결 방법</button>
            <button class="tab-btn" data-tab="detail2">구현 상세</button>
        </div>

        <!-- 해결 방법 -->
        <div id="solution2" class="tab-content active">
            <p>
                <strong>FSM(Finite State Machine)</strong> 패턴을 핵심 구조로 채택하여,
                상태별 책임을 명확히 분리하고
                플레이어와 몬스터 모두에
                <strong>공통으로 적용 가능한 전투 구조</strong>를 설계했습니다.
            </p>

            <div class="modal-feature-row reverse">
                <div class="text-content">

                    <p class="feature-line">
                        <span class="feature-title">상태 분리</span>
                        <span class="feature-desc">
                            Idle / Move / Attack / Dead 상태를 각각 독립적인 State 클래스로 구현
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">AI 이동</span>
                        <span class="feature-desc">
                            NavMeshAgent를 활용하여 몬스터의 순찰 및 추적 경로를 구성
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">전투 전환</span>
                        <span class="feature-desc">
                            플레이어 감지 시 추적 상태로 전환하고,
                            공격 거리 도달 시 AttackState로 자연스럽게 전환
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">재사용성</span>
                        <span class="feature-desc">
                            플레이어 / 몬스터 모두 동일한 FSM 구조를 사용하여
                            유지보수성과 확장성을 확보
                        </span>
                    </p>

                </div>

                <img src="https://raw.githubusercontent.com/Jinniepoo/Unity6_Undervein3D/main/GitImages/MonsterAtt.gif"
                     alt="FSM 기반 몬스터 전투 GIF" />
            </div>
        </div>

        <!-- 구현 상세 -->
        <div id="detail2" class="tab-content scrollable">
            <div class="modal-feature-row-reverse">
                <div class="text-content">

                    <p class="feature-line">
                        <span class="feature-title">FSM 구조 설계</span>
                        각 캐릭터는 FSM을 통해 상태를 관리하며,
                        상태 전환 로직은 중앙에서 통제되도록 구성했습니다.
                    </p>

                    <p>- 모든 상태는 공통 State 인터페이스를 상속</p>
                    <p>- Enter / Update / Exit 구조로 상태 책임 명확화</p>
                    <p>- 상태 간 직접 참조를 제거하여 결합도 최소화</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">몬스터 AI 흐름</span>
                        몬스터는 Waypoint 기반 순찰 로직을 수행하다가,
                        플레이어 감지 시 전투 상태로 전환됩니다.
                    </p>

                    <p>- Detection Range 내 플레이어 진입 시 추적 시작</p>
                    <p>- 공격 거리 도달 시 AttackState 전환</p>
                    <p>- 공격 이펙트 및 애니메이션 타이밍 연동</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">전투 상태 처리</span>
                        공격 상태에서는 이동 입력 및 다른 상태 전환을 제한하여
                        전투 중 상태 충돌을 방지했습니다.
                    </p>

                    <p>- 공격 중 이동 차단</p>
                    <p>- 공격 종료 시 거리 및 타겟 상태에 따라 다음 상태 결정</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">결과</span>
                        FSM 기반 구조를 통해
                        플레이어와 몬스터의 전투 로직을
                        일관된 방식으로 관리할 수 있었습니다.
                    </p>

                    <p>- 전투 흐름이 자연스럽고 예측 가능하게 동작</p>
                    <p>- 상태 추가 및 AI 패턴 확장이 용이</p>
                    <p>- 플레이어 / 몬스터 간 구조적 통일성 확보</p>

                </div>
            </div>
        </div>
    </div>
</div>


    <div class="modal-feature-section">
    <h3>3. 장비 교체 시스템 (Skinned Mesh)</h3>
    <h4>Blender 커스텀 Skinned Mesh 제작 및 Armature 재활용을 통한 장비 장착 시스템</h4>

    <p>
        무료 에셋의 한계를 넘어,
        <strong>장비 교체 시에도 애니메이션과 자연스럽게 연동되는</strong>
        Skinned Mesh 기반 장비 시스템이 필요했습니다.
    </p>

    <p>
        단순 Mesh 교체가 아닌,
        <strong>기존 캐릭터의 Bone 구조를 유지</strong>하면서
        장비 파츠가 함께 변형되는 구조를 목표로 했습니다.
    </p>

    <div class="tab-container">
        <div class="tab-header">
            <button class="tab-btn active" data-tab="solution3">해결 방법</button>
            <button class="tab-btn" data-tab="detail3">구현 상세</button>
        </div>

        <!-- 해결 방법 -->
        <div id="solution3" class="tab-content active">
            <p>
                Blender에서 <strong>장비 전용 Skinned Mesh</strong>를 직접 제작하고,
                Unity에서는 기존 캐릭터의
                <strong>Armature(Bone)를 그대로 재활용</strong>하는 방식으로
                장비 장착 시스템을 구현했습니다.
            </p>

            <div class="modal-feature-row">
                <div class="text-content">

                    <p class="feature-line">
                        <span class="feature-title">Skinned Mesh</span>
                        <span class="feature-desc">
                            장비 파츠를 Skinned Mesh 형태로 제작하여 애니메이션 변형을 지원
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">Armature 재사용</span>
                        <span class="feature-desc">
                            캐릭터 본 구조를 그대로 사용하여 장비 간 애니메이션 일관성 유지
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">동적 교체</span>
                        <span class="feature-desc">
                            장비 장착 시 Skinned Mesh Prefab을 런타임에 교체
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">확장성</span>
                        <span class="feature-desc">
                            동일 Armature 기준으로 다양한 장비 파츠 추가 가능
                        </span>
                    </p>

                </div>

                <img src="https://raw.githubusercontent.com/Jinniepoo/Unity6_Undervein3D/main/GitImages/EquipSkinned.gif"
                     alt="Skinned Mesh 장비 교체 GIF" />
            </div>
        </div>

        <!-- 구현 상세 -->
        <div id="detail3" class="tab-content scrollable">
            <div class="modal-feature-row">
                <div class="text-content">

                    <p class="feature-line">
                        <span class="feature-title">Blender 작업</span>
                        장비 모델을 직접 제작한 후,
                        기존 캐릭터의 Armature 정보를 유지한 상태로 바인딩했습니다.
                    </p>

                    <p>- 캐릭터와 동일한 Bone 구조 사용</p>
                    <p>- Weight Paint를 조정하여 관절 변형 최소화</p>
                    <p>- 장비별 Skinned Mesh Prefab 생성</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">Unity 장착 구조</span>
                        게임 내 장비 장착 시,
                        Skinned Mesh Prefab을 캐릭터 Armature 하위에 인스턴스화했습니다.
                    </p>

                    <p>- 기존 장비 제거 후 신규 장비 장착</p>
                    <p>- SkinnedMeshRenderer의 bones 배열 재연결</p>
                    <p>- 애니메이션 클립 변경 없이 즉시 동작</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">무기 Mesh 처리</span>
                        무기와 같은 비변형 Mesh는
                        Armature에 수작업으로 연결하여 동작을 맞췄습니다.
                    </p>

                    <p>- 손 Bone 기준으로 위치 및 회전 보정</p>
                    <p>- 공격 애니메이션과 자연스럽게 연동</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">결과</span>
                        장비 교체 시에도
                        애니메이션 품질이 유지되는 시스템을 완성했습니다.
                    </p>

                    <p>- 장비 교체 시 애니메이션 깨짐 없음</p>
                    <p>- 신규 장비 추가 시 리깅 작업 최소화</p>
                    <p>- 커스텀 장비 제작 파이프라인 확보</p>

                </div>
            </div>
        </div>
    </div>
</div>


    <div class="modal-feature-section">
    <h3>4. 인벤토리 및 아이템 관리</h3>
    <h4>Scriptable Object를 활용한 효율적인 아이템 데이터 관리 및 인벤토리 시스템</h4>

    <p>
        장비 아이템과 소비 아이템 등
        <strong>서로 다른 성격의 아이템을 일관된 구조로 관리</strong>하면서,
        습득·사용 로직을 명확히 분리할 필요가 있었습니다.
    </p>

    <p>
        데이터 수정 시 코드 변경을 최소화하고,
        <strong>확장성과 유지보수성이 높은 인벤토리 구조</strong>를 목표로 설계했습니다.
    </p>

    <div class="tab-container">
        <div class="tab-header">
            <button class="tab-btn active" data-tab="solution4">해결 방법</button>
            <button class="tab-btn" data-tab="detail4">구현 상세</button>
        </div>

        <!-- 해결 방법 -->
        <div id="solution4" class="tab-content active">
            <p>
                아이템 정보를 <strong>Scriptable Object</strong>로 분리하여
                데이터 중심 구조를 설계하고,
                습득 및 소비 로직은 역할에 따라 명확히 분리했습니다.
            </p>

            <div class="modal-feature-row reverse">
                <div class="text-content">

                    <p class="feature-line">
                        <span class="feature-title">아이템 데이터</span>
                        <span class="feature-desc">
                            Scriptable Object 기반으로 아이템 속성 관리
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">자동 습득</span>
                        <span class="feature-desc">
                            플레이어와의 충돌 기반 아이템 자동 획득 처리
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">소비 로직</span>
                        <span class="feature-desc">
                            인벤토리 UI 우클릭으로 즉시 사용 가능
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">확장 구조</span>
                        <span class="feature-desc">
                            장비 / 소비 아이템 타입 분리로 기능 확장 용이
                        </span>
                    </p>

                </div>

                <img src="https://raw.githubusercontent.com/Jinniepoo/Unity6_Undervein3D/main/GitImages/LootItems.gif"
                     alt="아이템 습득 및 소비 GIF" />
            </div>
        </div>

        <!-- 구현 상세 -->
        <div id="detail4" class="tab-content scrollable">
            <div class="modal-feature-row">
                <div class="text-content">

                    <p class="feature-line">
                        <span class="feature-title">Scriptable Object 설계</span>
                        아이템 공통 속성을 Scriptable Object로 정의하여
                        에디터에서 직관적으로 관리할 수 있도록 구성했습니다.
                    </p>

                    <p>- 아이템 이름, 아이콘, 타입, 설명 등 공통 데이터 관리</p>
                    <p>- 장비 / 소비 아이템 타입 분기 처리</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">아이템 습득 처리</span>
                        필드에 배치된 아이템과 플레이어 충돌 시
                        자동으로 인벤토리에 추가되도록 구현했습니다.
                    </p>

                    <p>- Trigger 기반 충돌 감지</p>
                    <p>- 중복 습득 방지 처리</p>
                    <p>- 습득 즉시 UI 반영</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">소비 아이템 사용</span>
                        인벤토리 UI에서 우클릭 시
                        즉시 아이템 효과가 적용되도록 구현했습니다.
                    </p>

                    <p>- 체력 회복 등 Stat 즉시 증가</p>
                    <p>- 사용 후 수량 감소 처리</p>
                    <p>- 수량 0 시 슬롯 비활성화</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">결과</span>
                        데이터 중심 구조로
                        유지보수성과 확장성을 모두 확보했습니다.
                    </p>

                    <p>- 신규 아이템 추가 시 코드 수정 최소화</p>
                    <p>- UI / 로직 / 데이터 역할 분리</p>
                    <p>- 장비 및 소비 아이템 통합 관리 가능</p>

                </div>
            </div>
        </div>
    </div>
</div>

    
  <div class="modal-feature-section">
    <h3>5. NPC 대화 시스템</h3>
    <h4>플레이어 Targeting 및 거리 감지 기반의 자연스러운 NPC 상호작용 및 대화 연출</h4>

    <p>
        NPC와의 상호작용이 단순 버튼 입력이 아니라,
        <strong>플레이어의 의도와 상황에 맞게 자연스럽게 시작</strong>되도록
        대화 트리거 조건을 설계할 필요가 있었습니다.
    </p>

    <p>
        특히 이동 중 대화가 시작되거나,
        거리 조건을 무시한 상호작용으로 인한
        <strong>몰입도 저하 문제</strong>를 해결하는 것이 목표였습니다.
    </p>

    <div class="tab-container">
        <div class="tab-header">
            <button class="tab-btn active" data-tab="solution5">해결 방법</button>
            <button class="tab-btn" data-tab="detail5">구현 상세</button>
        </div>

        <!-- 해결 방법 -->
        <div id="solution5" class="tab-content active">
            <p>
                마우스 <strong>Raycast 기반 Targeting</strong>과
                <strong>플레이어–NPC 거리 감지</strong>를 결합하여
                대화 시작 조건을 단계적으로 제어했습니다.
            </p>

            <div class="modal-feature-row">
                <div class="text-content">

                    <p class="feature-line">
                        <span class="feature-title">NPC Targeting</span>
                        <span class="feature-desc">
                            마우스 우클릭 Raycast로 NPC를 명확히 지정
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">거리 기반 이동</span>
                        <span class="feature-desc">
                            대화 가능 거리까지 자동 이동 처리
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">대화 트리거</span>
                        <span class="feature-desc">
                            거리 조건 충족 시 대화 UI 활성화
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">연출 연동</span>
                        <span class="feature-desc">
                            대화 중 NPC 애니메이션 및 UI 연동
                        </span>
                    </p>

                </div>

                <img src="https://raw.githubusercontent.com/Jinniepoo/Unity6_Undervein3D/main/GitImages/NPC.gif"
                     alt="NPC 대화 시스템 GIF" />
            </div>
        </div>

        <!-- 구현 상세 -->
        <div id="detail5" class="tab-content scrollable">
            <div class="modal-feature-row">
                <div class="text-content">

                    <p class="feature-line">
                        <span class="feature-title">Targeting 처리</span>
                        마우스 우클릭 시 Raycast를 사용해
                        NPC 여부를 판별하고, 유효한 타겟일 경우
                        상호작용 대상으로 지정했습니다.
                    </p>

                    <p>- UI 위 클릭 여부 선처리</p>
                    <p>- NPC Layer 기반 필터링</p>
                    <p>- 중복 Targeting 방지</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">이동 및 거리 판별</span>
                        NPC가 Target으로 지정되면
                        플레이어는 자동으로 대화 가능 거리까지 이동합니다.
                    </p>

                    <p>- NavMeshAgent 기반 자동 이동</p>
                    <p>- 지정 거리 도달 여부 실시간 체크</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">대화 시작 로직</span>
                        거리 조건이 충족되면
                        이동 상태를 종료하고 대화 상태로 전환합니다.
                    </p>

                    <p>- 플레이어 입력 잠금</p>
                    <p>- 대화 UI 활성화</p>
                    <p>- NPC 대화 애니메이션 트리거</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">결과</span>
                        상황에 맞는 상호작용 흐름으로
                        자연스러운 NPC 대화 시스템을 완성했습니다.
                    </p>

                    <p>- 이동 → 정지 → 대화 흐름의 자연스러운 연결</p>
                    <p>- 의도하지 않은 대화 트리거 방지</p>
                    <p>- 상호작용 몰입도 향상</p>

                </div>
            </div>
        </div>
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
                        <p><strong>[문제 정의]</strong> 9x9 그리드에 블록의 모양과 크기에 관계없이 정확히 배치하고, 회전된 모양도 유효성을 실시간으로 검사하여 오배치를 방지해야 했습니다.</p>
                        <p><strong>[해결 방법]</strong> Grid Data Array를 통해 그리드 상태를 관리하고, 블록의 모양을 정의하는 Shape Data와 대조하는 CanPlaceShape 로직을 핵심으로 구현했습니다.</p>
                        <p><strong>[해결 과정]</strong> 2차원 배열로 그리드 상태를 관리하고, 블록 드래그 시 마우스 위치와 블록 모양 배열을 대조하여 배치 가능 여부를 실시간으로 판단합니다. 마우스 오버 시 미리보기(Hover Block)를 제공하여 UX를 개선했습니다.</p>
                    </div>
                    <img src="https://raw.githubusercontent.com/Jinniepoo/PastelBlocks/main/Imgs/Congratulations.gif" alt="Horizontal 블록 완성 GIF" width = "250"/>
                </div>
            </div>
            
            <div class="modal-feature-section">
                <h3>2. 블록 생성 및 관리 로직</h3>
                <div class="modal-feature-row reverse">
                    <div class="text-content">
                        <h4>ShapeStorage를 활용한 효율적인 3개 블록 세트 관리 및 막혔을 때의 리셋 시스템</h4>
                        <p><strong>[문제 정의]</strong> 플레이어에게 항상 3개의 블록 세트를 제공하고, 이 세트 내 모든 블록이 배치 불가능할 때 게임 오버 대신 새로운 블록을 요청할 수 있는 기능(리셋 시스템)이 필요했습니다.</p>
                        <p><strong>[해결 방법]</strong> ShapeStorage 클래스로 Queue 방식의 블록 관리 시스템을 구축하고, RequestNewShape 시스템을 통해 블록 큐를 리셋하는 로직을 구현했습니다.</p>
                        <p><strong>[해결 과정]:</strong> ShapeData Scriptable Object를 이용하여 블록 모양/색상 데이터를 분리하고, ShapeStorage가 3개의 블록을 추적합니다. 모든 블록이 배치 불가능 상태일 때, 버튼 클릭 등 조건 하에 RequestNewShape() 함수를 호출하여 현재 큐를 버리고 새로운 3개 세트로 교체하여 게임의 지속성을 높였습니다.</p>
                </div>
                <img src="https://raw.githubusercontent.com/Jinniepoo/PastelBlocks/main/Imgs/RequestNewShape.gif" alt= "블록 리셋 시스템 GIF" width = "250"/>
            </div>

            <div class="modal-feature-section">
                <h3>3. 점수 보너스 시스템</h3>
                <div class="modal-feature-row">
                    <div class="text-content">
                        <h4>BonusManager를 통한 색상 블록 일괄 제거 시 보너스 점수 및 UI 표시</h4>
                            <p><strong>[문제 정의]</strong> 같은 색상의 블록이 모두 제거될 때, 플레이어에게 추가 보너스 점수를 제공하고 이를 UI로 시각화할 필요가 있었습니다.</p>
                            <p><strong>[해결 방법]</strong> BonusManager를 활용하여 특정 색상의 블록이 모두 제거되었는지 확인하고, 조건이 만족되면 보너스 점수를 계산하여 UI에 표시하도록 구현했습니다.</p>
                            <p><strong>[해결 과정]</strong> 게임 진행 중 블록 상태를 지속적으로 체크하고, 해당 색상 블록이 모두 제거되면 BonusManager가 보너스 점수 계산 후 UI를 띄워 플레이어에게 직관적으로 피드백을 제공하도록 처리했습니다.</p>
                    </div>
                    <img src="https://raw.githubusercontent.com/Jinniepoo/PastelBlocks/main/Imgs/bonus.gif" alt="Bonus 시스템 GIF" width = "250"/>
            </div>

            <div class="modal-feature-section">
                <h3>4. 최고 점수 기록 및 데이터 저장</h3>
                <div class="modal-feature-row reverse">
                    <div class="text-content">
                        <h4>Unity PlayerPrefs와 Binary Serialization을 조합한 안전하고 영구적인 최고 점수 데이터 Persistence</h4>
                        <p><strong>[문제 정의]</strong> 사용자의 최고 점수를 로컬 환경에 영구적으로 저장하고 불러와야 하며, 데이터의 안정성을 확보해야 했습니다.</p>
                        <p><strong>[해결 방법]</strong> 간단한 데이터 저장은 Unity PlayerPrefs를 사용하고, 중요 데이터인 최고 점수는 Binary Serialization을 조합하여 데이터 지속성(Persistence)을 구현했습니다.</p>
                        <p><strong>[해결 과정]</strong> BinaryData 유틸리티 클래스를 통해 최고 점수 데이터를 바이너리 파일로 직렬화하여 영구 저장합니다. 게임 시작 시 파일을 로드하고, 게임 중 실시간 점수를 PlayerPrefs에 임시 저장 후 최고 점수 갱신 시 바이너리 파일에 최종 저장하여 데이터 변조 위험을 낮추었습니다.</p>
                </div>
                <img src="https://raw.githubusercontent.com/Jinniepoo/PastelBlocks/main/Imgs/GameOver.gif" alt="GameOver GIF" width = "250"/>
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
            <div class="project-links" style="margin-top: 20px;">
                ${linksHtml}
            </div>
        `;
    }

    const featuresHtml = project.features.map(f => `<li>${f}</li>`).join('');
    let rightTextColumnHtml = `
        <div class="project-right-column">
            <h1 style="font-size: 2.2rem; margin-bottom: 5px; color: white;">
                ${project.title}<br>
                <span style="font-size: 1rem; color: var(--text-color-darker); font-weight: 400;">
                    (${project.subtitle})
                </span>
            </h1>

            <p style="font-size: 1.1rem; line-height: 1.8; margin-top: 10px; color: var(--text-color); margin-bottom: 20px;">
                ${project.description}
            </p>

            <h4>주요 기능 및 기여</h4>
            <ul>${featuresHtml}</ul>
        </div>
    `;

    let mainSummaryHtml = `
    <div class="new-modal-layout">
        <div class="project-left-column">
            ${summaryImageHtml}
        </div>

        <div class="vertical-divider"></div> <!-- 세로선 추가 -->

        <div class="project-right-column">
            <h1 style="font-size: 2.2rem; margin-bottom: 5px; color: white;">
                ${project.title}<br>
                <span style="font-size: 1rem; color: var(--text-color-darker); font-weight: 400;">
                    (${project.subtitle})
                </span>
            </h1>

            <p style="font-size: 1.1rem; line-height: 1.8; margin-top: 10px; color: var(--text-color); margin-bottom: 20px;">
                ${project.description}
            </p>

            <h4>주요 기능 및 기여</h4>
            <ul>${featuresHtml}</ul>
        </div>
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

document.addEventListener('click', function (e) {
    const button = e.target.closest('.tab-btn');
    if (!button) return;

    const tabId = button.dataset.tab;
    const tabContainer = button.closest('.tab-container');

    if (!tabContainer) return;

    tabContainer.querySelectorAll('.tab-btn').forEach(btn =>
        btn.classList.remove('active')
    );
    button.classList.add('active');

    tabContainer.querySelectorAll('.tab-content').forEach(content =>
        content.classList.remove('active')
    );
    tabContainer.querySelector(`#${tabId}`).classList.add('active');
});
