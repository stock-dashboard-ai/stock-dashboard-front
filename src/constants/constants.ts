import { FinanceData, ChatMessage } from "@/types";

export const FINANCE_DATA: FinanceData[] = [
  {
    id: 1,
    name: "NVIDIA",
    isCurrent: true,
    plusOrMinus: "+",
    ratio: 2.54,
    anal_rating: {
      buy: 28,
      hold: 8,
      sell: 2,
    },
    earning_data: {
      eps: [
        { quarter: "Q1 2023", actual: 1.24, expected: 1.12 },
        { quarter: "Q2 2023", actual: 2.09, expected: 1.95 },
        { quarter: "Q3 2023", actual: 1.89, expected: 1.75 },
        { quarter: "Q4 2023", actual: 2.45, expected: 2.30 },
      ],
    },
    consensus_target: {
      current_price: 163.4,
      target_price: 187,
      high_target: 225,
      low_target: 100,
      analyst_ratings: [
        { name: "Goldman Sachs", rating: "Buy", target_price: 200 },
        { name: "Morgan Stanley", rating: "Overweight", target_price: 185 },
        { name: "JPMorgan", rating: "Overweight", target_price: 175 },
        { name: "Citi", rating: "Neutral", target_price: 150 },
      ],
    },
    financial_snapshot: {
      metrics: [
        { label: "시가총액", value: "$844.9B" },
        { label: "P/E Ratio", value: "65.98" },
        { label: "배당 수익률", value: "0.03%" },
        { label: "부채비율", value: "66.5%" },
      ],
    },
    news_section: {
      news: [
        {
          title: "NVIDIA, AI 칩 수요 증가로 매출 전망 상향",
          date: "2024.06.28",
          source: "Reuters",
          sentiment: "positive",
        },
        {
          title: "NVIDIA CEO, 차기 GPU 아키텍처 로드맵 공개",
          date: "2024.06.27",
          source: "Bloomberg",
          sentiment: "positive",
        },
        {
          title: "NVIDIA vs AMD, 데이터센터 점유율 경쟁 심화",
          date: "2024.06.26",
          source: "TechCrunch",
          sentiment: "neutral",
        },
        {
          title: "NVIDIA 공급망 리스크 관련 우려 제기",
          date: "2024.06.25",
          source: "WSJ",
          sentiment: "negative",
        },
        {
          title: "분석가들, NVIDIA 목표주가 평균 $210으로 상향",
          date: "2024.06.24",
          source: "MarketWatch",
          sentiment: "positive",
        },
      ],
    },
    mda_summary: {
      items: [
        {
          description: "NVIDIA는 고성능 컴퓨팅 및 AI 분야의 선두 기업으로, GPU와 System-on-Chip(SoC)을 설계 및 판매합니다. 주요 시장은 데이터센터, 게이밍, 전문 시각화입니다.",
        },
        {
          description: "2024년 Q1 매출은 $26.0B로 전년 대비 262% 증가했습니다. 특히 데이터센터 부문에서 $22.1B의 매출을 기록하여 전체 수익의 85%를 차지합니다.",
        },
        {
          description: "지정학적 긴장에 따른 수출 규제, 경쟁사의 기술 발전, 공급망 문제, 그리고 AI 시장 성장률 둔화 등이 주요 리스크입니다.",
        },
      ],
    },
    price_chart: [
      {
        type: "1M",
        datas: [
          {
            date: "06/01",
            price: 20000,
          },
          {
            date: "06/08",
            price: 40000,
          },
          {
            date: "06/15",
            price: 35000
          },
          {
            date: "06/22",
            price: 28000
          },
          {
            date: "06/29",
            price: 35000
          }
        ]
      },
      {
        type: "3M",
        datas: [
          {
            date: "4/6",
            price: 28000
          },
          {

            date: "4/13",
            price: 38000
          },
          {
            date: "4/20",
            price: 30000
          },
          {
            date: "4/27",
            price: 25000
          },
          {
            date: "5/4",
            price: 28000
          },
          {
            date: "5/11",
            price: 20000
          },
          {
            date: "5/18",
            price: 40000
          },
          {
            date: "5/25",
            price: 35000
          },
          {
            date: "6/1",
            price: 28000
          },
          {
            date: "6/8",
            price: 25000
          },
          {
            date: "6/15",
            price: 28000
          },
          {
            date: "6/22",
            price: 30000
          },
          {
            date: "6/29",
            price: 25000
          }
        ]
      },
      {
        type: "6M",
        datas: [
          {
            date: "1/6",
            price: 20000
          },
          {
            date: "1/20",
            price: 28000
          },
          {
            date: "2/3",
            price: 38000
          },
          {
            date: "2/17",
            price: 30000
          },
          {
            date: "3/3",
            price: 25000
          },
          {
            date: "3/17",
            price: 28000
          },
          {
            date: "3/31",
            price: 20000
          },
          {
            date: "4/14",
            price: 40000
          },
          {
            date: "4/28",
            price: 35000
          },
          {
            date: "5/12",
            price: 28000
          },
          {
            date: "5/26",
            price: 25000
          },
          {
            date: "6/9",
            price: 28000
          },
          {
            date: "6/23",
            price: 30000
          }
        ]
      },
      {
        type: "1Y",
        datas: [
          {
            date: "7/6",
            price: 20000
          },
          {
            date: "9/6",
            price: 28000
          },
          {
            date: "11/6",
            price: 38000
          },
          {
            date: "1/6",
            price: 30000
          },
          {
            date: "3/6",
            price: 25000
          },
          {
            date: "5/6",
            price: 28000
          },
          {
            date: "7/6",
            price: 20000
          }
        ]
      }
    ]
  }
]

export const CHAT_MESSAGES: ChatMessage[] = [
  {
    message_id: 1,
    user: "assistant",
    content: "안녕하세요! NVDA 대시보드 데이터를 바탕으로 전문이\n답변드립니다.\n여닝 서프라이즈, 밸류에이션, 리스크 요인 등 묻어있는\n물어보세요!",
  },
]
