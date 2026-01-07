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
    <h4>
        3D 플랫포머 환경에서의 정교한 캐릭터 조작과 포물선 기반 넉백 전투 시스템 구현
    </h4>

    <p>
        New Super Lucky’s Tale 모작 프로젝트에서 캐릭터 조작과 전투는 <strong>게임 플레이 감각을 좌우하는 핵심 요소</strong>였습니다.
    </p>

    <p>
        이동/점프/공격이 자연스럽게 연결되고, 전투 시에는 <strong>명확한 피드백과 물리적 타격감</strong>을 제공하는 것을 목표로 설계했습니다.
    </p>

    <div class="tab-container">
        <div class="tab-header">
            <button class="tab-btn active" data-tab="solution1">해결 방법</button>
            <button class="tab-btn" data-tab="detail1">구현 상세</button>
        </div>

        <div id="solution1" class="tab-content active">
            <p>
                <strong>AABB/OBB 충돌 판정</strong>을 이용해 공격을 감지하고,
                <strong>포물선 공식</strong>과
                애니메이션 상태 머신을 결합하여
                전투 흐름을 구성했습니다.
            </p>

            <div class="modal-feature-row reverse">
                <div class="text-content">

                    <p class="feature-line">
                        <span class="feature-title">조작 시스템</span>
                        <span class="feature-desc">
                            이동/점프/꼬리 공격 연계 가능한 캐릭터 컨트롤
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">충돌 판정</span>
                        <span class="feature-desc">
                            AABB/OBB 기반 공격 충돌 체크
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">전투 연출</span>
                        <span class="feature-desc">
                            애니메이션 상태 머신 기반 피격 연출
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">넉백 처리</span>
                        <span class="feature-desc">
                            포물선 공식 기반 물리적 넉백 구현
                        </span>
                    </p>
                </div>

                <img
                    src="https://raw.githubusercontent.com/Jinniepoo/D3D11_NSLT3D/main/GitImages/Player_MonsterAtt.gif"
                    alt="몬스터 2차 공격 및 넉백 처리 GIF"
                />
            </div>
        </div>

        <div id="detail1" class="tab-content scrollable">
            <div class="modal-feature-row">
                <div class="text-content">

                    <p class="feature-line">
                        <span class="feature-title">캐릭터 핵심 조작</span>
                        이동, 점프, 공격을 하나의 조작 흐름으로 연결하여 3D 플랫포머 특유의 조작 감각을 구현했습니다.
                    </p>

                    <p>- 방향 입력 기반 이동 처리</p>
                    <p>- 점프 상태 전환 및 공중 제어</p>
                    <p>- 꼬리 공격 입력 시 공격 상태 전환</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">공격 충돌 처리</span>
                        꼬리 공격 시
                        공격 범위에 대한
                        AABB / OBB 충돌 판정을 수행했습니다.
                    </p>

                    <p>- 공격 히트 박스 생성</p>
                    <p>- 몬스터 충돌 여부 판별</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">단계별 피격 로직</span>
                        몬스터는
                        피격 횟수에 따라
                        서로 다른 상태로 전환됩니다.
                    </p>

                    <p>- 1차 피격: 어지러움 애니메이션 재생</p>
                    <p>- 2차 피격: 넉백 적용 및 Dead 처리</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">포물선 기반 넉백</span>
                        넉백 시
                        포물선 공식을 적용하여
                        자연스러운 공중 이동을 구현했습니다.
                    </p>

                    <p>- XZ 방향 힘 + Y축 상승력 적용</p>
                    <p>- 물리 기반 타격감 강화</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">Burrow Mode</span>
                        지면 아래로 잠입하는
                        Burrow Mode를 구현하여
                        아이템 수집과 파티클 연출을 추가했습니다.
                    </p>

                    <p>- 지면 판정 처리</p>
                    <p>- 파티클 및 시각 효과 연동</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">결과</span>
                        조작과 전투가
                        자연스럽게 연결되는
                        3D 플랫포머 전투 구조를 완성했습니다.
                    </p>

                    <p>- 명확한 전투 피드백 제공</p>
                    <p>- 물리 기반 타격감 강화</p>
                    <p>- 자체 엔진 구조 이해도 향상</p>

                </div>
            </div>
        </div>
    </div>
</div>

             
             <div class="modal-feature-section">
    <h3>2. 퀘스트 메커니즘 및 파츠 연결 시스템</h3>
    <h4>
        Golem Head 파츠 수집과
        Player PartObject에 대한 동적 Attach 연출 구현
    </h4>

    <p>
        전투 중심 플레이에 더해,
        <strong>아이템 수집과 퀘스트 진행이 시각적으로 드러나는 메커니즘</strong>이
        필요했습니다.
    </p>

    <p>
        단순히 아이템을 획득하는 것이 아니라,
        플레이어 캐릭터의 특정 파츠에
        <strong>동적으로 연결되는 연출</strong>을 통해
        퀘스트 진행 상태를 직관적으로 전달하는 것을 목표로 했습니다.
    </p>

    <div class="tab-container">
        <div class="tab-header">
            <button class="tab-btn active" data-tab="solution2">해결 방법</button>
            <button class="tab-btn" data-tab="detail2">구현 상세</button>
        </div>

        <div id="solution2" class="tab-content active">
            <p>
                Golem Head를
                <strong>Loot Object</strong>로 정의하고,
                플레이어의 Armature 내
                <strong>Hand PartObject</strong>에
                Attach / Detach 가능한 구조로 설계했습니다.
            </p>

            <div class="modal-feature-row">
                <div class="text-content">

                    <p class="feature-line">
                        <span class="feature-title">아이템 처리</span>
                        <span class="feature-desc">
                            Golem Head를 Loot Object로 관리
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">파츠 구조</span>
                        <span class="feature-desc">
                            Player Armature 내 Hand PartObject 활용
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">연결 로직</span>
                        <span class="feature-desc">
                            Attach / Detach 기반 파츠 동적 연결
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">퀘스트 연출</span>
                        <span class="feature-desc">
                            아이템 소지 상태를 시각적으로 표현
                        </span>
                    </p>

                </div>

                <img
                    src="https://raw.githubusercontent.com/Jinniepoo/D3D11_NSLT3D/main/GitImages/Player_AttachGolemHead.gif"
                    alt="Golem Head 파츠 연결 GIF"
                />
            </div>
        </div>

        <div id="detail2" class="tab-content scrollable">
            <div class="modal-feature-row">
                <div class="text-content">

                    <p class="feature-line">
                        <span class="feature-title">Loot Object 설계</span>
                        Golem Head를
                        월드 내 상호작용 가능한
                        Loot Object로 정의했습니다.
                    </p>

                    <p>- 충돌 시 획득 판정</p>
                    <p>- 퀘스트 진행 상태와 연동</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">충돌 및 획득 처리</span>
                        플레이어와 Golem Head 간
                        충돌 감지 시
                        아이템 획득 로직을 수행했습니다.
                    </p>

                    <p>- AABB 기반 충돌 판정</p>
                    <p>- 획득 시 월드 오브젝트 비활성화</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">Attach 로직</span>
                        획득한 Head Mesh를
                        Player Armature의
                        Hand 노드에 동적으로 부착했습니다.
                    </p>

                    <p>- 로컬 트랜스폼 기준 부착</p>
                    <p>- 캐릭터 애니메이션과 자연스러운 연동</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">퀘스트 진행 연출</span>
                        Head 파츠가
                        캐릭터 움직임에 따라
                        자연스럽게 따라다니도록 처리했습니다.
                    </p>

                    <p>- 이동 / 점프 / 전투 시 연출 유지</p>
                    <p>- 플레이어 상태 변화와 무관한 안정적 연결</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">Detach 및 정리</span>
                        퀘스트 완료 시
                        Head Object를 분리하거나
                        제거하도록 구현했습니다.
                    </p>

                    <p>- 파츠 Detach 처리</p>
                    <p>- 불필요한 오브젝트 정리</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">결과</span>
                        아이템 수집과
                        퀘스트 진행이
                        즉각적으로 인지되는 구조를 완성했습니다.
                    </p>

                    <p>- 퀘스트 몰입도 향상</p>
                    <p>- 자체 엔진 기반 파츠 시스템 이해도 강화</p>
                    <p>- 캐릭터 연출 확장 가능 구조 확보</p>

                </div>
            </div>
        </div>
    </div>
</div>

             
             <div class="modal-feature-section">
    <h3>3. ImGui 기반 Map Tool 제작 (오브젝트 편집)</h3>
    <h4>
        인게임 환경에서의
        오브젝트 배치 · 편집 · 디버깅을 위한 레벨 제작 도구
    </h4>

    <p>
        레벨 디자인과 디버깅 과정에서,
        매번 코드를 수정하거나
        외부 툴을 사용하는 방식은
        <strong>작업 효율을 크게 저하시켰습니다.</strong>
    </p>

    <p>
        게임 실행 중에도
        오브젝트의 상태를 즉시 수정하고
        결과를 바로 확인할 수 있는
        <strong>인게임 전용 편집 도구</strong>가 필요했습니다.
    </p>

    <div class="tab-container">
        <div class="tab-header">
            <button class="tab-btn active" data-tab="solution3">해결 방법</button>
            <button class="tab-btn" data-tab="detail3">구현 상세</button>
        </div>

        <div id="solution3" class="tab-content active">
            <p>
                <strong>ImGui</strong>를 활용해
                인게임 Map Tool UI를 구성하고,
                선택된 오브젝트의
                <strong>World Matrix를 직접 조작</strong>할 수 있도록 구현했습니다.
            </p>

            <div class="modal-feature-row reverse">
                <div class="text-content">

                    <p class="feature-line">
                        <span class="feature-title">UI 구성</span>
                        <span class="feature-desc">
                            ImGui 기반 인게임 툴 UI
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">편집 기능</span>
                        <span class="feature-desc">
                            위치/회전/스케일 실시간 수정
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">데이터 반영</span>
                        <span class="feature-desc">
                            World Matrix 직접 업데이트
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">레벨 작업</span>
                        <span class="feature-desc">
                            Collectible 오브젝트 배치 / 제거
                        </span>
                    </p>

                </div>

                <img
                    src="https://raw.githubusercontent.com/Jinniepoo/D3D11_NSLT3D/main/GitImages/MapTool_ObjectPosition.gif"
                    alt="Map Tool 오브젝트 위치 편집 GIF"
                />
            </div>
        </div>

        <div id="detail3" class="tab-content scrollable">
            <div class="modal-feature-row">
                <div class="text-content">

                    <p class="feature-line">
                        <span class="feature-title">ImGui 툴 구조</span>
                        게임 실행 중 호출되는
                        ImGui 패널 형태로
                        Map Tool을 구성했습니다.
                    </p>

                    <p>- 디버그 전용 UI 레이어 분리</p>
                    <p>- 게임 플레이 로직과 독립적인 구조</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">오브젝트 선택 로직</span>
                        월드 내 오브젝트를
                        툴에서 선택하여
                        현재 편집 대상로 지정했습니다.
                    </p>

                    <p>- 선택된 오브젝트 정보 UI 표시</p>
                    <p>- 다중 오브젝트 관리 확장 가능</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">World Matrix 편집</span>
                        ImGui Slider 및 Input 필드를 통해
                        위치, 회전, 스케일 값을 수정하고
                        World Matrix에 즉시 반영했습니다.
                    </p>

                    <p>- 실시간 트랜스폼 업데이트</p>
                    <p>- 수정 결과 즉각 확인 가능</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">Collectible 연동</span>
                        코인, 클로버 등
                        Collectible 오브젝트를
                        툴에서 직접 배치 / 제거하도록 구현했습니다.
                    </p>

                    <p>- 회전 애니메이션 자동 적용</p>
                    <p>- 점수 증가 로직과 연동</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">레벨 디자인 효율</span> 코드 수정 없이 레벨 구조를 빠르게 수정하고
                        디버깅할 수 있는 환경을 구축했습니다.
                    </p>

                    <p>- 반복 테스트 시간 단축</p>
                    <p>- 레벨 디자인 작업 생산성 향상</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">결과</span>
                        자체 엔진 환경에서
                        실전 레벨 제작에 활용 가능한
                        Map Tool을 완성했습니다.
                    </p>

                    <p>- 인게임 디버깅 편의성 향상</p>
                    <p>- 툴 기반 개발 워크플로우 경험 확보</p>
                    <p>- 향후 Navigation / Gimmick 확장 가능</p>

                </div>
            </div>
        </div>
    </div>
</div>


             <div class="modal-feature-section">
    <h3>4. Map Tool - Navigation 시스템 및 픽셀 피킹</h3>
    <h4>
        AI 경로 탐색을 위한 Cell 생성 및 마우스 기반 월드 좌표 계산 로직
    </h4>

    <p>
        몬스터 AI의 경로 탐색을 위해, 이동 가능한 영역을
        <strong>Navigation Cell</strong> 형태로 정의할 필요가 있었습니다.
    </p>

    <p>
        이를 위해 사용자가 마우스로 클릭한 지점을 정확한 <strong>3D 월드 좌표</strong>로 변환하고,
        안정적인 네비게이션 데이터를 생성하는 것이 핵심 과제였습니다.
    </p>

    <div class="tab-container">
        <div class="tab-header">
            <button class="tab-btn active" data-tab="solution4">해결 방법</button>
            <button class="tab-btn" data-tab="detail4">구현 상세</button>
        </div>

        <div id="solution4" class="tab-content active">
            <p>
                <strong>픽셀 피킹(Pixel Picking)</strong> 기법을 활용해
                마우스 좌표를 3D 월드 좌표로 변환하고,
                Cell 생성 시
                <strong>정점 시계방향(Clockwise) 정렬 로직</strong>을 적용하여
                네비게이션 데이터의 안정성을 확보했습니다.
            </p>

            <div class="modal-feature-row">
                <div class="text-content">

                    <p class="feature-line">
                        <span class="feature-title">좌표 변환</span>
                        <span class="feature-desc">
                            Pixel Picking 기반 3D 월드 좌표 계산
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">Cell 생성</span>
                        <span class="feature-desc">
                            삼각형 기반 Navigation Cell 구성
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">정점 정렬</span>
                        <span class="feature-desc">
                            Clockwise 정렬을 통한 데이터 안정성 확보
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">편의 기능</span>
                        <span class="feature-desc">
                            Snap 기능으로 포인트 자동 연결
                        </span>
                    </p>

                </div>

                <img
                    src="https://raw.githubusercontent.com/Jinniepoo/D3D11_NSLT3D/main/GitImages/MapTool_Navigation.gif"
                    alt="Map Tool Navigation 시스템 GIF"
                />
            </div>
        </div>

        <div id="detail4" class="tab-content scrollable">
            <div class="modal-feature-row">
                <div class="text-content">

                    <p class="feature-line">
                        <span class="feature-title">Pixel Picking 구현</span>
                        마우스 클릭 시
                        Depth / Normal 버퍼를 활용하여
                        픽셀 피킹을 수행하고,
                        정확한 월드 좌표를 계산했습니다.
                    </p>

                    <p>- Screen Space → World Space 변환</p>
                    <p>- 마우스 기반 정밀 좌표 획득</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">Cell 포인트 입력</span>
                        사용자가 클릭한
                        3개의 포인트를 기준으로
                        삼각형 Navigation Cell을 생성했습니다.
                    </p>

                    <p>- 수동 Cell 정의 방식</p>
                    <p>- 다양한 지형에 유연하게 대응</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">Clockwise 정렬 로직</span>
                        벡터 외적을 통해
                        정점 순서를 검사하고,
                        필요 시 정점을 교환하여
                        시계방향 정렬을 보장했습니다.
                    </p>

                    <p>- 잘못된 Normal 방향 방지</p>
                    <p>- AI 경로 탐색 안정성 향상</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">Snap 기능</span>
                        이미 존재하는 포인트 근처에서
                        자동으로 연결되도록 Snap 기능을 구현했습니다.
                    </p>

                    <p>- Cell 간 단절 방지</p>
                    <p>- 네비게이션 제작 속도 향상</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">툴 활용 결과</span>
                        인게임 Map Tool 환경에서
                        직접 네비게이션 데이터를 생성하고
                        즉시 테스트할 수 있는 구조를 완성했습니다.
                    </p>

                    <p>- AI 이동 경로 안정성 확보</p>
                    <p>- 네비게이션 데이터 디버깅 용이</p>
                    <p>- 자체 엔진 기반 툴 제작 경험 강화</p>

                </div>
            </div>
        </div>
    </div>
</div>

             
             <div class="modal-feature-section">
    <h3>5. Gimmick Object 및 환경 상호작용</h3>
    <h4>
        점프 패드, 체크포인트, 이벤트 게이트 등을 통한 게임 환경 상호작용 시스템 구현
    </h4>

    <p>
        3D 플랫포머 게임 특성상,
        단순 이동과 전투를 넘어
        <strong>환경과의 상호작용</strong>을 통해
        플레이 경험의 변화를 제공할 필요가 있었습니다.
    </p>

    <p>
        각 기믹 오브젝트는
        명확한 역할과 연출을 가지며,
        플레이어의 행동에 즉각 반응하는 구조를
        목표로 설계했습니다.
    </p>

    <div class="tab-container">
        <div class="tab-header">
            <button class="tab-btn active" data-tab="solution5">해결 방법</button>
            <button class="tab-btn" data-tab="detail5">구현 상세</button>
        </div>

        <div id="solution5" class="tab-content active">
            <p>
                기믹 오브젝트별로 <strong>전용 충돌 이벤트 리스너</strong>와 <strong>상태 변화 로직</strong>을 분리 설계하여,
                확장성과 연출 제어가 용이한 구조를 구현했습니다.
            </p>

            <div class="modal-feature-row reverse">
                <div class="text-content">

                    <p class="feature-line">
                        <span class="feature-title">충돌 처리</span>
                        <span class="feature-desc">
                            오브젝트별 독립적인 충돌 이벤트 리스너 구성
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">연출 연동</span>
                        <span class="feature-desc">
                            이펙트/애니메이션/트랜스폼 변화 연계
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">상태 관리</span>
                        <span class="feature-desc">
                            1회성 / 지속형 기믹 상태 분리 처리
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">제작 방식</span>
                        <span class="feature-desc">
                            모델 피벗 조정 및 데이터 기반 기믹 구성
                        </span>
                    </p>

                </div>

                <img
                    src="https://raw.githubusercontent.com/Jinniepoo/D3D11_NSLT3D/main/GitImages/Gimmich_SpringMushroom2.gif"
                    alt="점프 패드 및 체크포인트 GIF"
                />
            </div>
        </div>

        <div id="detail5" class="tab-content scrollable">
            <div class="modal-feature-row">
                <div class="text-content">

                    <p class="feature-line">
                        <span class="feature-title">점프 패드 (Jump Pad)</span> 플레이어 충돌 시
                        상향 힘을 적용하여
                        <strong>Bouncing 효과</strong>를 구현했습니다.
                    </p>

                    <p>- 충돌 이벤트 기반 힘 적용</p>
                    <p>- 스케일 변화로 시각적 피드백 제공</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">체크포인트 (Checkpoint)</span>
                        체크포인트 진입 시
                        이펙트 및 애니메이션을 실행하여
                        저장 지점을 명확히 인지하도록 구성했습니다.
                    </p>

                    <p>- 1회 활성화 상태 관리</p>
                    <p>- Respawn 위치 갱신</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">이벤트 게이트 (Gate)</span>
                        Blender에서
                        <strong>피벗 포인트를 직접 조정한 모델</strong>을 사용하여
                        자연스러운 회전 개폐 연출을 구현했습니다.
                    </p>

                    <p>- 회전 축 기반 Transform 제어</p>
                    <p>- 이벤트 조건 충족 시 동작</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">미로 벨 (Maze Bell)</span>
                        이벤트 트리거를 통해
                        벽의 흔들림과 이동 연출을 구현하여
                        환경 변화가 체감되도록 설계했습니다.
                    </p>

                    <p>- Trigger 기반 연출 제어</p>
                    <p>- 환경 오브젝트 동적 변화</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">결과</span>
                        다양한 기믹 오브젝트를 통해
                        게임 환경의 상호작용성과
                        플레이의 리듬을 강화했습니다.
                    </p>

                    <p>- 플레이 흐름에 자연스러운 변화 제공</p>
                    <p>- 환경 기반 퍼즐 및 탐험 요소 강화</p>
                    <p>- 기믹 추가가 쉬운 확장 가능한 구조</p>

                </div>
            </div>
        </div>
    </div>
</div>

             
             <div class="modal-feature-section">
    <h3>6. Monster AI 및 렌더링 최적화</h3>
    <h4>
        상태 머신 기반 몬스터 AI 구현 및 Instancing / Frustum Culling을 통한 렌더링 최적화
    </h4>

    <p>
        다수의 몬스터가 동시에 등장하는 환경에서, 플레이어를 인식하고 추적/공격하는
        <strong>기본 AI 동작</strong>이 필요했습니다.
    </p>

    <p>
        동시에 반복적인 메시 렌더링으로 인한 <strong>Draw Call 증가 및 성능 저하</strong>를 개선해야 하는 과제가 있었습니다.
    </p>

    <div class="tab-container">
        <div class="tab-header">
            <button class="tab-btn active" data-tab="solution6">해결 방법</button>
            <button class="tab-btn" data-tab="detail6">구현 상세</button>
        </div>

        <div id="solution6" class="tab-content active">
            <p>
                몬스터 AI는
                <strong>단순 상태 머신(State Machine)</strong> 구조로 설계하여
                행동 전환을 명확히 분리했고,
                렌더링 단계에서는
                <strong>Instancing</strong>과
                <strong>Frustum Culling</strong>을 적용하여
                성능 최적화를 진행했습니다.
            </p>

            <div class="modal-feature-row">
                <div class="text-content">

                    <p class="feature-line">
                        <span class="feature-title">AI 구조</span>
                        <span class="feature-desc">
                            FSM 기반 상태 분리 (Idle / 추적 / 공격 / 피격)
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">행동 전환</span>
                        <span class="feature-desc">
                            거리 및 상태 조건 기반 전이 처리
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">렌더링 최적화</span>
                        <span class="feature-desc">
                            Instancing으로 Draw Call 최소화
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">가시성 판별</span>
                        <span class="feature-desc">
                            Frustum Culling을 통한 불필요한 렌더 제거
                        </span>
                    </p>

                </div>

                <img
                    src="https://raw.githubusercontent.com/Jinniepoo/D3D11_NSLT3D/main/GitImages/Monster_TrackPlayer.gif"
                    alt="몬스터 추적 AI GIF"
                />
            </div>
        </div>

        <div id="detail6" class="tab-content scrollable">
            <div class="modal-feature-row">
                <div class="text-content">

                    <p class="feature-line">
                        <span class="feature-title">상태 머신 (FSM)</span>
                        몬스터의 행동을
                        Idle / 추적 / 공격 / 피격 상태로 분리하여
                        조건 기반 전이를 구현했습니다.
                    </p>

                    <p>- 플레이어 거리 및 이벤트 기반 상태 전환</p>
                    <p>- 상태별 Update 로직 분리</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">추적 AI</span>
                        플레이어를 감지하면
                        방향 벡터를 기반으로 이동하여
                        지속적으로 추적하도록 구현했습니다.
                    </p>

                    <p>- 거리 계산 기반 타겟 판별</p>
                    <p>- 공격 범위 진입 시 상태 전환</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">Instancing 렌더링</span>
                        동일 메시를 사용하는 몬스터들을
                        Instancing 방식으로 렌더링하여
                        Draw Call 수를 크게 감소시켰습니다.
                    </p>

                    <p>- Instance Buffer 기반 데이터 전달</p>
                    <p>- 대량 오브젝트 렌더링 효율 개선</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">Frustum Culling</span>
                        카메라 시야 밖에 위치한 몬스터는
                        렌더링 대상에서 제외하여
                        불필요한 GPU 연산을 제거했습니다.
                    </p>

                    <p>- View Frustum 기반 가시성 판별</p>
                    <p>- 화면 외 오브젝트 렌더링 제거</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">결과</span>
                        AI의 동작 안정성과
                        다수 몬스터 환경에서도
                        안정적인 프레임을 유지할 수 있었습니다.
                    </p>

                    <p>- 명확한 AI 상태 전이 구조</p>
                    <p>- 대규모 전투 상황에서도 성능 안정화</p>
                    <p>- 확장 가능한 몬스터 AI 및 렌더링 구조 확보</p>

                </div>
            </div>
        </div>
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
    <h3>1. Firebase Authentication 기반 사용자 인증 시스템</h3>
    <h4>비동기 인증 처리 및 상태 변경 이벤트를 활용한 로그인 / 회원 관리 구조</h4>

    <p>
        게임 내에서 사용자 계정 기반 기능을 제공하기 위해,
        <strong>안정적인 인증 시스템</strong>과
        로그인 상태에 따라 UI가 자연스럽게 변경되는 구조가 필요했습니다.
    </p>

    <p>
        특히 비동기 인증 처리 중 발생할 수 있는
        <strong>UI 동기화 문제와 상태 관리 복잡도</strong>를
        최소화하는 것을 목표로 설계했습니다.
    </p>

    <div class="tab-container">
        <div class="tab-header">
            <button class="tab-btn active" data-tab="solution6">해결 방법</button>
            <button class="tab-btn" data-tab="detail6">구현 상세</button>
        </div>

        <div id="solution6" class="tab-content active">
            <p>
                <strong>Firebase Authentication</strong>을 활용하여
                Email & Password 기반 회원가입 / 로그인 / 로그아웃 기능을 구현하고,
                <strong>상태 변경 이벤트</strong>를 중심으로 UI를 관리했습니다.
            </p>

            <div class="modal-feature-row reverse">
                <div class="text-content">
                    <p class="feature-line">
                        <span class="feature-title">인증 방식</span>
                        <span class="feature-desc">
                            Email & Password 기반 사용자 인증
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">비동기 처리</span>
                        <span class="feature-desc">
                            FirebaseAuth 비동기 API 활용
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">상태 관리</span>
                        <span class="feature-desc">
                            StateChanged 이벤트 기반 로그인 상태 감지
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">UI 연동</span>
                        <span class="feature-desc">
                            로그인 상태에 따른 UI 자동 전환
                        </span>
                    </p>

                </div>
                <img src="https://raw.githubusercontent.com/Jinniepoo/Unity6_Undervein3D/main/GitImages/LoginScreen.gif"
                alt="로그인 화면 GIF" />
            </div>
        </div>

        <div id="detail6" class="tab-content scrollable">
            <div class="modal-feature-row">
                <div class="text-content">

                    <p class="feature-line">
                        <span class="feature-title">회원가입 / 로그인 구현</span>
                        FirebaseAuth에서 제공하는
                        비동기 API를 사용해 인증 로직을 구성했습니다.
                    </p>

                    <p>- CreateUserWithEmailAndPasswordAsync()</p>
                    <p>- SignInWithEmailAndPasswordAsync()</p>
                    <p>- 비동기 처리 중 예외 및 실패 케이스 분기 처리</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">로그아웃 처리</span>
                        FirebaseAuth.SignOut()을 통해
                        세션을 명확히 종료하도록 구현했습니다.
                    </p>

                    <p>- 로그아웃 시 사용자 정보 초기화</p>
                    <p>- 로그인 UI로 즉시 전환</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">상태 변경 이벤트</span>
                        Firebase에서 제공하는
                        <strong>StateChanged 이벤트</strong>를 활용해
                        인증 상태 변경을 감지했습니다.
                    </p>

                    <p>- 로그인 / 로그아웃 시 자동 호출</p>
                    <p>- CurrentUser 존재 여부로 상태 판별</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">UI 동기화 구조</span>
                        인증 로직과 UI 로직을 분리하고,
                        상태 변경 이벤트를 기준으로 UI를 갱신했습니다.
                    </p>

                    <p>- 로그인 상태 → 메인 UI 표시</p>
                    <p>- 로그아웃 상태 → 로그인 / 회원가입 UI 표시</p>
                    <p>- 인증 로직 변경 시 UI 코드 수정 최소화</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">결과</span>
                        비동기 인증 환경에서도
                        안정적인 사용자 인증 흐름을 구축했습니다.
                    </p>

                    <p>- 인증 상태와 UI 불일치 문제 제거</p>
                    <p>- 로그인 흐름의 예측 가능성 확보</p>
                    <p>- 추후 소셜 로그인 확장 가능 구조</p>

                </div>
            </div>
        </div>
    </div>
</div>


    <div class="modal-feature-section">
    <h3>2. 캐릭터 조작 및 이동 시스템</h3>
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
    <h3>3. FSM (Finite State Machine) 및 AI 전투</h3>
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
    <h3>4. 장비 교체 시스템 (Skinned Mesh)</h3>
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
    <h3>5. 인벤토리 및 아이템 관리</h3>
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
    <h3>6. NPC 대화 시스템</h3>
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
        <div class="modal-feature-section">
    <h3>1. 그리드 기반 블록 배치 시스템</h3>
    <h4>
        2차원 배열과 Shape Data를 활용한
        정확한 블록 배치 및 실시간 유효성 검사 로직
    </h4>

    <p>
        블록을 배치하여 점수를 획득하는 캐주얼 퍼즐 게임으로,
        <strong>9×9 그리드 상에서 다양한 형태의 블록</strong>을
        정확하게 배치하는 시스템이 필요했습니다.
    </p>

    <p>
        특히 블록의 회전 여부와 모양에 관계없이
        <strong>잘못된 배치를 사전에 차단</strong>하고,
        모바일 환경에서도 직관적인 UX를 제공하는 것을
        목표로 설계했습니다.
    </p>

    <div class="tab-container">
        <div class="tab-header">
            <button class="tab-btn active" data-tab="solution1">해결 방법</button>
            <button class="tab-btn" data-tab="detail1">구현 상세</button>
        </div>

        <div id="solution1" class="tab-content active">
            <p>
                <strong>2차원 Grid Data Array</strong>를 통해
                전체 보드 상태를 관리하고,
                블록의 형태를 정의한 <strong>Shape Data</strong>와
                이를 비교하는 방식으로
                배치 가능 여부를 판단했습니다.
            </p>

            <div class="modal-feature-row">
                <div class="text-content">

                    <p class="feature-line">
                        <span class="feature-title">그리드 관리</span>
                        <span class="feature-desc">
                            9×9 2차원 배열 기반 보드 상태 관리
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">블록 데이터</span>
                        <span class="feature-desc">
                            Shape Data를 통한 블록 모양 정의
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">유효성 검사</span>
                        <span class="feature-desc">
                            CanPlaceShape 로직으로 실시간 배치 판정
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">UX 개선</span>
                        <span class="feature-desc">
                            마우스 오버 시 배치 미리보기 제공
                        </span>
                    </p>

                </div>

                <img
                    src="https://raw.githubusercontent.com/Jinniepoo/PastelBlocks/main/Imgs/Congratulations.gif"
                    alt="블록 배치 완성 GIF"
                    width="250"
                />
            </div>
        </div>

        <div id="detail1" class="tab-content scrollable">
            <div class="modal-feature-row">
                <div class="text-content">

                    <p class="feature-line">
                        <span class="feature-title">그리드 데이터 구조</span>
                        9×9 크기의 2차원 배열을 사용해
                        각 셀의 점유 여부를 관리했습니다.
                    </p>

                    <p>- 빈 칸 / 점유 칸 상태 명확히 구분</p>
                    <p>- 블록 배치 및 제거 시 즉시 갱신</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">블록 배치 판정 로직</span>
                        Shape Data 배열과
                        현재 마우스 위치 기준의 그리드 좌표를 비교해
                        배치 가능 여부를 계산했습니다.
                    </p>

                    <p>- 블록 모양의 모든 셀 검사</p>
                    <p>- 범위 초과 및 충돌 여부 체크</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">실시간 미리보기</span>
                        블록 드래그 중,
                        배치 가능 여부에 따라
                        미리보기 블록(Hover Block)을 표시했습니다.
                    </p>

                    <p>- 배치 가능 시 시각적 강조</p>
                    <p>- 불가능 시 즉각적인 피드백 제공</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">결과</span>
                        블록의 형태와 회전에 관계없이
                        안정적인 배치 판정이 가능한
                        그리드 기반 퍼즐 시스템을 구현했습니다.
                    </p>

                    <p>- 오배치 방지 로직 완성</p>
                    <p>- 모바일 환경에서도 직관적인 조작 제공</p>
                    <p>- 확장 가능한 블록 형태 구조 확보</p>

                </div>
            </div>
        </div>
    </div>
</div>

            
            <div class="modal-feature-section">
    <h3>2. 블록 생성 및 관리 로직</h3>
    <h4>
        ShapeStorage를 활용한
        3개 블록 세트 관리 및 배치 불가 상황 대응 리셋 시스템
    </h4>

    <p>
        퍼즐 게임의 흐름을 유지하기 위해,
        플레이어에게 <strong>항상 3개의 블록 세트</strong>를 제공하고
        게임이 막히는 상황에서도
        플레이를 이어갈 수 있는 구조가 필요했습니다.
    </p>

    <p>
        단순 게임 오버 처리 대신,
        <strong>전략적 선택으로 새로운 블록을 요청</strong>할 수 있도록
        설계하는 것을 목표로 했습니다.
    </p>

    <div class="tab-container">
        <div class="tab-header">
            <button class="tab-btn active" data-tab="solution2">해결 방법</button>
            <button class="tab-btn" data-tab="detail2">구현 상세</button>
        </div>

        <div id="solution2" class="tab-content active">
            <p>
                <strong>ShapeStorage</strong> 클래스를 중심으로
                블록을 Queue 방식으로 관리하고,
                모든 블록이 배치 불가능한 경우
                <strong>RequestNewShape 시스템</strong>을 통해
                블록 세트를 초기화하도록 구현했습니다.
            </p>

            <div class="modal-feature-row reverse">
                <div class="text-content">

                    <p class="feature-line">
                        <span class="feature-title">블록 관리</span>
                        <span class="feature-desc">
                            ShapeStorage 기반 3개 블록 세트 유지
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">데이터 분리</span>
                        <span class="feature-desc">
                            ShapeData Scriptable Object 활용
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">배치 판정</span>
                        <span class="feature-desc">
                            모든 블록의 배치 가능 여부 검사
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">리셋 시스템</span>
                        <span class="feature-desc">
                            RequestNewShape()로 블록 큐 교체
                        </span>
                    </p>

                </div>

                <img
                    src="https://raw.githubusercontent.com/Jinniepoo/PastelBlocks/main/Imgs/RequestNewShape.gif"
                    alt="블록 리셋 시스템 GIF"
                    width="250"
                />
            </div>
        </div>

        <div id="detail2" class="tab-content scrollable">
            <div class="modal-feature-row">
                <div class="text-content">

                    <p class="feature-line">
                        <span class="feature-title">ShapeStorage 구조</span>
                        ShapeStorage 클래스가
                        현재 제공 중인 3개의 블록을
                        내부적으로 관리하도록 구성했습니다.
                    </p>

                    <p>- Queue 구조 기반 블록 관리</p>
                    <p>- 블록 사용 시 자동 갱신</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">ShapeData 활용</span>
                        블록의 모양과 색상 정보를
                        Scriptable Object로 분리하여
                        데이터 중심 구조를 유지했습니다.
                    </p>

                    <p>- 블록 로직과 데이터 완전 분리</p>
                    <p>- 새로운 블록 추가 시 코드 수정 최소화</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">배치 불가 상태 감지</span>
                        현재 제공된 3개 블록 모두에 대해
                        그리드 기준 배치 가능 여부를 검사했습니다.
                    </p>

                    <p>- 모든 블록이 배치 불가 상태인지 판별</p>
                    <p>- 실시간 상태 체크로 UX 개선</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">RequestNewShape 시스템</span>
                        특정 조건(버튼 클릭 등) 하에
                        RequestNewShape()를 호출하여
                        기존 블록 큐를 초기화했습니다.
                    </p>

                    <p>- 현재 블록 세트 제거</p>
                    <p>- 새로운 3개 블록 즉시 생성</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">결과</span>
                        게임 오버 없이도
                        플레이 흐름을 유지할 수 있는
                        유연한 블록 관리 시스템을 구현했습니다.
                    </p>

                    <p>- 플레이 지속성 향상</p>
                    <p>- 전략적 선택 요소 추가</p>
                    <p>- 캐주얼 퍼즐 게임에 적합한 UX 확보</p>

                </div>
            </div>
        </div>
    </div>
</div>


            <div class="modal-feature-section">
    <h3>3. 점수 보너스 시스템</h3>
    <h4>
        BonusManager 기반
        색상 블록 일괄 제거 시 보너스 점수 계산 및 UI 피드백
    </h4>

    <p>
        퍼즐 플레이 중 단순 점수 획득을 넘어,
        특정 조건을 만족했을 때
        <strong>추가 보상을 제공하는 시스템</strong>이 필요했습니다.
    </p>

    <p>
        특히 같은 색상의 블록이 모두 제거되는 순간을
        플레이어가 명확히 인지할 수 있도록
        <strong>점수 보너스와 시각적 피드백</strong>을 함께 제공하는 것을
        목표로 했습니다.
    </p>

    <div class="tab-container">
        <div class="tab-header">
            <button class="tab-btn active" data-tab="solution3">해결 방법</button>
            <button class="tab-btn" data-tab="detail3">구현 상세</button>
        </div>

        <div id="solution3" class="tab-content active">
            <p>
                <strong>BonusManager</strong>를 중심으로
                현재 그리드 내 블록 상태를 추적하고,
                특정 색상의 블록이 모두 제거되었을 경우
                <strong>보너스 점수를 계산</strong>하여
                UI로 즉시 피드백을 제공하도록 구현했습니다.
            </p>

            <div class="modal-feature-row">
                <div class="text-content">

                    <p class="feature-line">
                        <span class="feature-title">조건 판별</span>
                        <span class="feature-desc">
                            동일 색상 블록의 전체 제거 여부 확인
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">점수 계산</span>
                        <span class="feature-desc">
                            조건 충족 시 보너스 점수 추가
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">관리 클래스</span>
                        <span class="feature-desc">
                            BonusManager를 통한 점수 처리 중앙화
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">UI 피드백</span>
                        <span class="feature-desc">
                            보너스 발생 시 UI 텍스트 표시
                        </span>
                    </p>

                </div>

                <img
                    src="https://raw.githubusercontent.com/Jinniepoo/PastelBlocks/main/Imgs/bonus.gif"
                    alt="Bonus 시스템 GIF"
                    width="250"
                />
            </div>
        </div>

        <div id="detail3" class="tab-content scrollable">
            <div class="modal-feature-row">
                <div class="text-content">

                    <p class="feature-line">
                        <span class="feature-title">블록 상태 추적</span>
                        게임 진행 중
                        그리드에 존재하는 블록들의
                        색상 정보를 지속적으로 검사했습니다.
                    </p>

                    <p>- 현재 그리드 내 색상별 블록 개수 확인</p>
                    <p>- 블록 제거 이벤트 이후 상태 갱신</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">보너스 조건 판단</span>
                        특정 색상의 블록이
                        그리드에서 완전히 사라졌는지를
                        기준으로 보너스 조건을 판단했습니다.
                    </p>

                    <p>- 색상별 잔여 블록 수 체크</p>
                    <p>- 최초 제거 시점만 보너스 지급</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">BonusManager 역할</span>
                        보너스 점수 계산 및
                        UI 호출 책임을
                        BonusManager에 집중시켰습니다.
                    </p>

                    <p>- 보너스 점수 계산 로직 관리</p>
                    <p>- 중복 보너스 지급 방지</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">UI 연동</span>
                        보너스 발생 시
                        즉각적인 시각적 피드백을 제공하여
                        성취감을 강화했습니다.
                    </p>

                    <p>- 보너스 텍스트 UI 표시</p>
                    <p>- 점수 증가 애니메이션 연동</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">결과</span>
                        플레이어의 전략적 플레이를
                        자연스럽게 유도하는
                        보너스 점수 시스템을 완성했습니다.
                    </p>

                    <p>- 반복 플레이 동기 강화</p>
                    <p>- 색상 제거 전략 요소 추가</p>
                    <p>- 캐주얼 퍼즐에 적합한 보상 구조 구현</p>

                </div>
            </div>
        </div>
    </div>
</div>


            <div class="modal-feature-section">
    <h3>4. 최고 점수 기록 및 데이터 저장</h3>
    <h4>
        PlayerPrefs와 Binary Serialization을 조합한
        안정적인 최고 점수 데이터 Persistence 구조
    </h4>

    <p>
        캐주얼 퍼즐 게임 특성상,
        플레이어의 <strong>최고 점수 기록</strong>은
        반복 플레이 동기를 제공하는 핵심 요소였습니다.
    </p>

    <p>
        단순한 임시 저장을 넘어,
        게임 재실행 이후에도
        <strong>데이터가 안전하게 유지되는 영구 저장 구조</strong>를
        구현하는 것을 목표로 했습니다.
    </p>

    <div class="tab-container">
        <div class="tab-header">
            <button class="tab-btn active" data-tab="solution4">해결 방법</button>
            <button class="tab-btn" data-tab="detail4">구현 상세</button>
        </div>

        <div id="solution4" class="tab-content active">
            <p>
                간단한 실시간 데이터는
                <strong>Unity PlayerPrefs</strong>를 활용하고,
                최고 점수와 같은 핵심 데이터는
                <strong>Binary Serialization</strong>을 통해
                파일로 저장하는 이중 저장 구조를 설계했습니다.
            </p>

            <div class="modal-feature-row reverse">
                <div class="text-content">

                    <p class="feature-line">
                        <span class="feature-title">임시 저장</span>
                        <span class="feature-desc">
                            PlayerPrefs를 통한 실시간 점수 관리
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">영구 저장</span>
                        <span class="feature-desc">
                            Binary Serialization 기반 최고 점수 파일 저장
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">데이터 안정성</span>
                        <span class="feature-desc">
                            중요 데이터 분리 저장으로 변조 위험 최소화
                        </span>
                    </p>

                    <p class="feature-line">
                        <span class="feature-title">로드 구조</span>
                        <span class="feature-desc">
                            게임 시작 시 자동 최고 점수 로드
                        </span>
                    </p>

                </div>

                <img
                    src="https://raw.githubusercontent.com/Jinniepoo/PastelBlocks/main/Imgs/GameOver.gif"
                    alt="GameOver GIF"
                    width="250"
                />
            </div>
        </div>

        <div id="detail4" class="tab-content scrollable">
            <div class="modal-feature-row">
                <div class="text-content">

                    <p class="feature-line">
                        <span class="feature-title">PlayerPrefs 활용</span>
                        게임 플레이 중
                        현재 점수와 같은
                        자주 변경되는 데이터를
                        PlayerPrefs에 임시 저장했습니다.
                    </p>

                    <p>- 실시간 점수 업데이트</p>
                    <p>- UI 즉시 반영을 위한 경량 저장</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">Binary Serialization</span>
                        최고 점수는
                        BinaryData 유틸리티 클래스를 통해
                        바이너리 파일로 직렬화하여 저장했습니다.
                    </p>

                    <p>- 파일 기반 영구 데이터 저장</p>
                    <p>- 게임 재실행 후에도 데이터 유지</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">저장 시점 분리</span>
                        게임 종료 또는
                        최고 점수 갱신 시점에만
                        바이너리 파일을 갱신하도록 설계했습니다.
                    </p>

                    <p>- 불필요한 파일 I/O 최소화</p>
                    <p>- 저장 안정성 확보</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">데이터 로드 흐름</span>
                        게임 시작 시
                        저장된 바이너리 파일을 로드하여
                        최고 점수를 초기화했습니다.
                    </p>

                    <p>- 저장 파일 존재 여부 체크</p>
                    <p>- 초기 값 세팅 및 예외 처리</p>

                    <br>

                    <p class="feature-line">
                        <span class="feature-title">결과</span>
                        간단하면서도
                        안정적인 최고 점수 저장 구조를
                        완성했습니다.
                    </p>

                    <p>- 최고 점수 데이터 유실 방지</p>
                    <p>- 반복 플레이 동기 강화</p>
                    <p>- 캐주얼 게임에 적합한 경량 Persistence 구조</p>

                </div>
            </div>
        </div>
    </div>
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
