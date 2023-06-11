export const handleReferralLinkCopy = (referralInputValue: string): void => {
    navigator.clipboard.writeText(referralInputValue)
    .then(() => {
      console.log("Text coppied successfully!");
    });
};