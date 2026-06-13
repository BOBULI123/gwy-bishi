"use client";

import { Timer } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function MockExamClient() {
  return (
    <Card>
      <CardHeader>
        <Badge tone="mint" className="w-fit">
          <Timer className="mr-1 h-3.5 w-3.5" />
          导入中
        </Badge>
        <CardTitle className="text-3xl">真题模考导入中</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <p className="text-base leading-8 text-ink/68">
          当前站内已切换为真题来源索引。真题正文完成授权或官方来源导入后，再开放模考功能。
        </p>
      </CardContent>
    </Card>
  );
}
