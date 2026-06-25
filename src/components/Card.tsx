

import React from "react";

export default function Card({ children, flex, isBorder }: { children: React.ReactNode, flex?: number, isBorder?: boolean }) {
    return (
        <div className={`card box-border px-[20px] py-[30px] rounded-[20px] bg-[#0d1f38] inline-block ${isBorder ? "border-l-[4px] border-[#3b7bf0]" : ""}`} style={{ flex: flex ?? 1 }}>{children}</div>
    )
} 