"use client";

import { GettedItem } from '@/types';
import AsideHeader from '@/components/AsideHeader'
import Card from '@/components/Card'
import MainHeader from '@/components/MainHeader'
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { BiEqualizer } from "react-icons/bi";
import { IoIosArrowRoundForward } from "react-icons/io";


const chartData = [
  { date: '6/17', return: 0 },
  { date: '6/18', return: 2.5 },
  { date: '6/19', return: 1.8 },
  { date: '6/20', return: 3.2 },
  { date: '6/21', return: 5.1 },
  { date: '6/22', return: 4.3 },
  { date: '6/23', return: 6.7 },
  { date: '6/24', return: 9.02 },
]

const item_weight = [
  { name: "삼성 전자", percent: 30.4 },
  { name: "SK 하이닉스", percent: 29.7 },
  { name: "LG에너지솔루션", percent: 15.9 },
  { name: "NAVER", percent: 13.8 },
  { name: "카카오", percent: 10.3 }
]

const getted_item: GettedItem[] = [
  {
    id: "005930",
    item: "삼성전자",
    current_price: 78500,
    eval_price: 3950000,
    ratio: 10.6
  },
  {
    id: "000600",
    item: "SK하이닉스",
    current_price: 192000,
    eval_price: 384000,
    ratio: 32.4
  },
  {
    id: "035420",
    item: "NAVER",
    current_price: 178000,
    eval_price: 178000,
    ratio: 8.7
  }
]

export default function HomePage() {
  return (
    <>
      <AsideHeader />
      <main className="flex-1 h-screen bg-[#07111f] flex flex-col">
        <MainHeader title={"대시보드 홈"} />
        <div className="flex-1 w-full p-[26px] overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="w-full flex gap-[16px] mb-[16px]">
            <Card>
              <div className="cost flex flex-col">
                <h2 className="text-[14px] text-[#3a5a88] mb-[16px]">총 평가 금액</h2>
                <span className="text-[28px] text-white font-[800] block mb-[16px]">1,293만원</span>
                <span className="text-[14px] text-[#ef4444]">+1.47% 오늘</span>
              </div>
            </Card>
            <Card>
              <div className="cost flex flex-col">
                <h2 className="text-[14px] text-[#3a5a88] mb-[16px]">총 평가 손익</h2>
                <span className="text-[28px] text-[#ef4444] font-[800] block mb-[16px]">+107만원</span>
                <span className="text-[14px] text-[#ef4444]">수익률 +9.02%</span>
              </div>
            </Card>
            <Card>
              <div className="cost flex flex-col">
                <h2 className="text-[14px] text-[#3a5a88] mb-[16px]">오늘 수익</h2>
                <span className="text-[28px] text-[#ef4444] font-[800] block mb-[16px]">+18.7만원</span>
                <span className="text-[14px] text-[#ef4444]">+1.47%</span>
              </div>
            </Card>
            <Card>
              <div className="cost flex flex-col">
                <h2 className="text-[14px] text-[#3a5a88] mb-[16px]">보유 종목</h2>
                <span className="text-[28px] text-white font-[800] block mb-[16px]">5종목</span>
                <span className="text-[14px] text-[#6a8ab0]">수익 3 / 손실 2</span>
              </div>
            </Card>
          </div>
          <div className="graph flex gap-[16px]">
            <Card flex={2}>
              <div className="cost flex flex-col relative">
                <h2 className="text-[18px] text-[#c0d4ee] font-[700] mb-[36px]">포트폴리오 수익률 추이</h2>
                <div className="tabs absolute top-0 right-0 flex">
                  <button className="text-[#3a5a88] text-[14px] px-[10px]">1주</button>
                  <button className="text-[#3a5a88] text-[14px] px-[10px]">1개월</button>
                  <button className="text-[#3a5a88] text-[14px] px-[10px]">3개월</button>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="colorReturn" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="20%" stopColor='#193769' stopOpacity={1} />
                        <stop offset="95%" stopColor='#193769' stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="date" axisLine={false} tickLine={false} fontSize={12} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#0f1e2e', border: '1px solid #3a5a88' }}
                      labelStyle={{ color: '#c0d4ee' }}
                    />
                    <Area
                      type="monotone"
                      dataKey="return"
                      stroke="#3b7bf0"
                      fillOpacity={1}
                      fill="url(#colorReturn)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>
            <Card>
              <div className="cost flex flex-col">
                <h2 className="text-[18px] text-[#c0d4ee] font-[700] mb-[36px]">종목 비중</h2>
                <div className="item__weight__wrapper flex flex-col gap-[26px]">
                  {item_weight.map((item: any) => (
                    <div key={item.name} className="item__weight__each relative">
                      <span className="text-[#6a8ab0]">{item.name}</span>
                      <span className="text-[#6a8ab0] absolute top-0 right-0">{item.percent}%</span>
                      <div className="progressive_bar mt-[10px] h-[5px] bg-linear-to-r from-[#3b7bf0] to-[#5b9af0] rounded-[4px]" style={{ width: `${item.percent}%` }}></div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
          <div className="table_type flex gap-[16px] mt-[16px]">
            <Card flex={3}>
              <div className="type flex flex-col">
                <h2 className="text-[18px] text-[#c0d4ee] font-[700] mb-[36px]">보유 종목</h2>
                <table className="table">
                  <thead>
                    <tr>
                      <td className="text-[#3a5a88] text-[12px] pb-[20px]">종목</td>
                      <td className="text-[#3a5a88] text-[12px] pb-[20px]">현재가</td>
                      <td className="text-[#3a5a88] text-[12px] pb-[20px]">평가금액</td>
                      <td className="text-[#3a5a88] text-[12px] pb-[20px]">수익률</td>
                    </tr>
                  </thead>
                  <tbody>
                    {getted_item.map((item: GettedItem) => (
                      <tr key={item.id} className="mb-[30px]">
                        <td className="text-[#c0d4ee] font-[800] flex flex-col">
                          <span>{item.item}</span>
                          <span className="text-[12px] text-[#3a5a88] pb-[30px]">{item.id}</span>
                        </td>
                        <td className="text-[#c0d4ee] font-[800] pb-[30px]">{item.current_price}</td>
                        <td className="text-[#c0d4ee] font-[800] pb-[30px]">{item.eval_price}</td>
                        <td className="text-[#c0d4ee] font-[800] pb-[30px]">+{item.ratio}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
            <div className="flex flex-col gap-[16px]" style={{ flex: "2 1 0%" }}>
              <Card flex={2} isBorder>
                <div className="ai_breif flex flex-col">
                  <h2 className="text-[#7aabf0] text-[16px] font-[700] flex items-center gap-[10px]">
                    <div className="w-[30px] h-[30px] rounded-[6px] bg-[#152845] flex justify-center items-center">
                      <BiEqualizer />
                    </div>
                    오늘의 AI 브리핑
                  </h2>
                  <span className="text-[#7999b7] block mt-[16px] mb-[10px]">SK하이닉스 강세로 포트폴리오 +1.47% 상승. 카카오 손절기준선 근접 — 확인 필요.</span>
                  <button className="self-start text-[#3b7bf0] flex items-center gap-[6px] cursor-pointer">
                    <span>전체 브리핑 보기</span>
                    <IoIosArrowRoundForward size={22} />
                  </button>
                </div>
              </Card>
              <Card>
                <div className="news flex flex-col">
                  <h2 className="text-[18px] text-[#c0d4ee] font-[700] mb-[36px]">최신 뉴스</h2>

                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
