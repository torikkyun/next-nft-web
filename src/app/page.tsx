import { NFTCard } from '@/components/nft-card';

export default function Page() {
  return (
    <div className="bg-muted flex min-h-svh items-center justify-center p-6 gap-10 md:p-10">
      <NFTCard
        image="https://i.pinimg.com/736x/28/bf/cc/28bfcc354585ec297fc0f1d13a58d142.jpg"
        title="NFT Art #001"
        description="Tác phẩm nghệ thuật NFT độc quyền, chỉ có một bản duy nhất trên blockchain."
        price="0.25 ETH"
        owner="0x1234...abcd"
      />
      <NFTCard
        image="https://i.pinimg.com/736x/28/bf/cc/28bfcc354585ec297fc0f1d13a58d142.jpg"
        title="NFT Art #001"
        description="Tác phẩm nghệ thuật NFT độc quyền, chỉ có một bản duy nhất trên blockchain."
        price="0.25 ETH"
        owner="0x1234...abcd"
      />
    </div>
  );
}
