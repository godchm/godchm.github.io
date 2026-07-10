export const projects = [
  {
    slug: 'hankkipot',
    title: '한끼팟',
    subtitle: '대학생 식사 동행 매칭 서비스',
    period: '2026.05 - 2026.06',
    team: '5인 백엔드 팀 개발',
    role: '백엔드, AI 설계, RAG 추천, 모니터링, n8n 알림 구축',
    github: 'https://github.com/Team3-Final-Project-SNS/Final-project',
    docs: [
      {
        label: 'AI 문서',
        url: 'https://app.notion.com/p/AI-481ea6a4f79d8359be818107f37e1787',
      },
      {
        label: '모니터링 문서',
        url: 'https://app.notion.com/p/a2cea6a4f79d83c58a4181de0249cb4b',
      },
    ],
    summary:
      '같은 학교 안에서 식사 동행을 찾는 서비스입니다. 자연어 의도를 반영한 추천을 위해 pgvector와 Spring AI Tool Calling 기반 RAG 구조를 도입했고, 운영 관점의 로그/메트릭 모니터링과 Slack 알림 자동화를 구축했습니다.',
    stack: [
      'Java 17',
      'Spring Boot',
      'Spring Security',
      'JPA',
      'QueryDSL',
      'MySQL',
      'PostgreSQL',
      'Redis',
      'Kafka',
      'Spring AI',
      'OpenAI API',
      'RAG',
      'Docker',
      'AWS',
      'GitHub Actions',
      'Prometheus',
      'Grafana',
      'Loki',
      'n8n',
    ],
    featuredStack: ['RAG 추천', 'pgvector', 'Spring AI Tool Calling', '전용 Connection Pool', 'Grafana/Loki', 'n8n Slack 알림'],
    highlights: [
      'RAG 게시물 추천 요청 증가로 발생할 수 있는 connection storm을 방지하기 위해 RAG 전용 HikariDataSource를 분리했습니다.',
      'pgvector 임베딩 검색과 Spring AI Tool Calling을 연결해 자연어 의도 기반 추천 구조를 구현했습니다.',
      'Alloy, Loki, Prometheus, Grafana 기반 모니터링 환경과 n8n Slack 알림 워크플로를 구성했습니다.',
    ],
    details: [
      {
        title: 'RAG 전용 PostgreSQL 커넥션 풀 분리',
        body:
          'pgvector 검색마다 DataSource가 즉석 생성되며 연결 생성 비용이 누적될 수 있는 구조를 개선했습니다. RAG 전용 HikariDataSource를 메인 MySQL DataSource와 독립적으로 분리하고, pool size와 timeout을 외부 설정으로 관리할 수 있게 구성했습니다.',
      },
      {
        title: 'pgvector + Spring AI Tool Calling 기반 추천',
        body:
          '단순 메타데이터 매칭으로는 “매운 거 말고 가벼운 한식” 같은 자연어 의도를 충분히 반영하기 어렵다고 판단했습니다. 게시글 임베딩 색인, 유사도 native query, @Tool 함수 노출, Tool 결과 기반 답변 강제를 통해 추천 근거의 일관성을 높였습니다.',
      },
      {
        title: '로그 모니터링 및 Slack 알림 자동화',
        body:
          'Grafana 대시보드에서 주요 도메인의 호출 현황과 오류 로그를 확인할 수 있게 만들고, 임계치 기반 알림 룰을 n8n 워크플로와 연동해 장애 발생 시 Slack으로 자동 알림이 전송되도록 구성했습니다.',
      },
    ],
  },
  {
    slug: 'sparta-coffee',
    title: 'Sparta Coffee',
    subtitle: '포인트 기반 커피 주문/결제 서비스',
    period: '2026.04 - 2026.05',
    team: '1인 백엔드 개발',
    role: '주문/결제, 포인트, 이벤트 재시도, 캐시 최적화',
    github: 'https://github.com/godchm/sparta-coffee',
    docs: [],
    summary:
      '복수 메뉴 주문, 포인트 충전 및 결제, 인기 검색어와 메뉴 조회 기능을 구현한 백엔드 서비스입니다. Redis 분산락과 낙관적 락으로 결제/포인트 동시성 문제를 제어하고, Kafka 이벤트 발행 실패를 Pending Event 패턴으로 분리했습니다.',
    stack: [
      'Java 17',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'Spring Data JPA',
      'MySQL',
      'Redis',
      'Apache Kafka',
      'Spring Retry',
      'Docker',
      'Docker Compose',
      'Git',
      'GitHub',
    ],
    featuredStack: ['Redis 분산락', '낙관적 락', 'Kafka Pending Event', 'Cache-Aside', 'Spring Retry'],
    highlights: [
      'Redis SET NX 기반 분산락으로 동일 주문의 중복 결제와 포인트 중복 차감을 방지했습니다.',
      'UserPoint 엔티티에 낙관적 락과 최대 3회 재시도 정책을 적용해 포인트 동시 차감 충돌을 해소했습니다.',
      'Pending Event 기반 Kafka 재시도 구조와 Cache-Aside 기반 메뉴 조회 최적화를 구현했습니다.',
    ],
    details: [
      {
        title: 'Redis 분산락으로 중복 결제 차단',
        body:
          '@RedisLock 어노테이션과 RedisLockAspect AOP로 락 획득, 재시도, 해제 로직을 공통화했습니다. lock:order:{orderId} 키를 기준으로 동일 주문의 결제 요청은 하나만 처리되도록 제어하고, UUID와 Lua Script로 락 소유자만 해제하도록 구성했습니다.',
      },
      {
        title: '낙관적 락 + 재시도 정책',
        body:
          '동일 사용자의 여러 결제 요청이 동시에 포인트 잔액을 변경할 때 발생하는 충돌을 UserPoint 엔티티의 낙관적 락으로 감지했습니다. 충돌은 최대 3회 재시도하고, 잔액 부족처럼 재시도해도 결과가 바뀌지 않는 경우에는 즉시 예외를 반환했습니다.',
      },
      {
        title: 'Pending Event 기반 Kafka 재시도',
        body:
          '결제 트랜잭션에서 Kafka 장애가 결제 실패로 전파되지 않도록 PendingPopularRankingEvent를 먼저 DB에 저장했습니다. 별도 스케줄러가 발행 가능한 이벤트를 Kafka로 전송하고, 실패 시 재시도 횟수와 다음 재시도 시간을 기록하도록 설계했습니다.',
      },
      {
        title: 'Redis Cache-Aside 메뉴 조회',
        body:
          '메뉴 단건/복수 ID 조회에 Cache-Aside 방식을 적용했습니다. 캐시 미스가 발생한 메뉴만 DB에서 조회한 뒤 TTL 10분으로 Redis에 저장하고, 메뉴 수정/삭제 시 해당 캐시를 제거해 일관성을 유지했습니다.',
      },
    ],
  },
  {
    slug: 'readys7',
    title: "Ready's7",
    subtitle: '개발자 용역 매칭 플랫폼',
    period: '2026.04',
    team: '5인 백엔드 팀 개발',
    role: '리뷰/포트폴리오 도메인, 검색 최적화, 무중단 배포',
    github: 'https://github.com/Ready-s7/Readys7-project',
    docs: [
      {
        label: '인덱스/검색 최적화 문서',
        url: 'https://app.notion.com/p/2026-4-16-2026-4-22-946ea6a4f79d826c9e2e01df438746fd',
      },
    ],
    summary:
      '개발자와 의뢰자를 연결하는 용역 매칭 플랫폼입니다. 리뷰/포트폴리오 도메인을 설계하고, 10만 건 더미 데이터 기준 통합 검색 응답 시간을 약 1,800ms에서 90ms로 개선했습니다.',
    stack: [
      'Java 17',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'Spring Data JPA',
      'QueryDSL',
      'MySQL',
      'Redis',
      'Redisson',
      'WebSocket',
      'STOMP',
      'Docker',
      'AWS ALB',
      'EC2',
      'RDS',
      'SSM',
      'Route 53',
      'ACM',
      'GitHub Actions',
      'JUnit',
    ],
    featuredStack: ['FULLTEXT Index', 'QueryDSL', 'LIKE Fallback', 'PageableExecutionUtils', 'ALB 롤링 배포', 'AWS SSM'],
    highlights: [
      'FULLTEXT + LIKE 하이브리드 검색으로 통합 검색 응답 시간을 약 95% 개선했습니다.',
      'PortfolioQueryRepositoryImpl을 분리해 검색/페이징 쿼리를 Repository 계층으로 캡슐화했습니다.',
      'ALB, EC2 2대, SSM, GitHub Actions 기반 롤링 업데이트 무중단 배포를 구축했습니다.',
    ],
    details: [
      {
        title: '통합 검색 성능 95% 개선',
        body:
          '기존 LIKE "%keyword%" OR 조건과 JSON_CONTAINS 조합으로 풀스캔이 발생하던 구조를 개선했습니다. title, description에 ngram FULLTEXT 인덱스를 적용하고 QueryDSL numberTemplate로 MATCH ... AGAINST 검색을 구현해 응답 시간을 약 1,800ms에서 90ms로 줄였습니다.',
      },
      {
        title: '리뷰/포트폴리오 도메인 계층 분리',
        body:
          'Portfolio 엔티티에 변경 메서드를 도입하고 수정 요청 DTO를 분리해 상태 변경 책임을 도메인으로 이동했습니다. 리뷰 수정/삭제 시 대상 사용자 평점을 재계산하도록 보완하고 Service/Controller 테스트를 작성했습니다.',
      },
      {
        title: 'ALB/SSM 기반 롤링 업데이트',
        body:
          'ALB와 EC2 2대, Target Group을 구성해 서버를 한 대씩 순차 교체하는 방식의 배포를 적용했습니다. GitHub Actions에서 빌드/테스트/Docker 이미지 Push를 수행하고 AWS SSM으로 EC2 배포 명령을 자동화했습니다.',
      },
    ],
  },
  {
    slug: 'payment-subscription',
    title: 'Sparta Payment & Subscription',
    subtitle: '이커머스 결제/정기구독/포인트 통합 백엔드',
    period: '2026.03',
    team: '5인 백엔드 팀 개발',
    role: '상품/주문 도메인, 다품목 주문 API, 정기구독 모델, 주문-포인트 연동',
    github: 'https://github.com/PX-Sparta/payment-project',
    docs: [],
    summary:
      '이커머스 결제, 정기구독, 포인트를 통합한 백엔드 시스템입니다. 상품/주문 도메인과 다품목 주문 API, 정기구독 상태/청구 모델, 주문-포인트 연동을 구현하고 비관적 락 기반 재고 동시성 제어를 적용했습니다.',
    stack: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'MySQL',
      'Redis',
      'Redisson',
      'Spring Security',
      'JWT',
      'OAuth2',
      'PortOne',
      'Gradle',
    ],
    featuredStack: ['PESSIMISTIC_WRITE', '다품목 주문 API', '구독 상태 머신', 'SubscriptionBilling', '주문-포인트 연동'],
    highlights: [
      'PESSIMISTIC_WRITE 기반 재고 락으로 동시 주문 상황의 재고 정합성을 확보했습니다.',
      'Subscription과 SubscriptionBilling을 분리해 구독 상태와 회차별 청구 이력을 명확히 관리했습니다.',
      'Order 조회 응답에 포인트 사용액, 최종 결제 금액, 적립 포인트 정보를 통합했습니다.',
    ],
    details: [
      {
        title: '재고 동시성 제어',
        body:
          'ProductRepository에 비관적 락을 적용하고, 락 획득 후 재고 검증/차감 흐름을 구현했습니다. 다품목 주문 시 상품 ID 순으로 락을 획득하고 동일 상품 주문 수량을 합산해 데드락 가능성과 중복 차감 위험을 줄였습니다.',
      },
      {
        title: '정기 구독 상태 머신 설계',
        body:
          'Subscription과 SubscriptionBilling 엔티티를 분리해 구독 상태와 회차별 청구 이력을 관리했습니다. 청구 금액, 결제 식별자, 예정일/시도일, 성공/실패 상태 및 실패 사유를 기록하도록 모델링했습니다.',
      },
      {
        title: '주문 조회에 포인트/결제 도메인 통합',
        body:
          'OrderListResponse에 pointUsed, finalAmount, pointEarned 필드를 추가하고 PaymentRepository에 orderId 기준 결제/포인트 조회 메서드를 추가했습니다. 주문 목록에서 주문 금액, 사용 포인트, 최종 결제 금액, 적립 포인트를 함께 확인할 수 있게 만들었습니다.',
      },
    ],
  },
] as const;

export type Project = (typeof projects)[number];
