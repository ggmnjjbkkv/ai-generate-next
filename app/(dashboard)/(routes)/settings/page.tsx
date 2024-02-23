import { Settings } from "lucide-react";

import { Heading } from "@/components/heading";
import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";

const SettingsPage = async () => {
  const isPro = await checkSubscription();

  return ( 
    <div>
      <Heading
        title="Settings"
        description="Manage account settings"
        icon={Settings}
        bgColor="bg-slate-500/20"
      />
      <div className="px-4 space-y-4 lg:px-8">
        <div className="text-sm text-muted-foreground">
          {isPro ? "You are currently on a Pro plan" : "You are currently on a free plan"}
        </div>
        <SubscriptionButton isPro={isPro}/>
      </div>
    </div>
   );
}
 
export default SettingsPage;

