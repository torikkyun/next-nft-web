import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface NFTCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  owner: string;
}

export function NFTCard({
  image,
  title,
  description,
  price,
  owner,
}: NFTCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover rounded-lg"
        />
      </CardHeader>
      <CardContent>
        <h2 className="text-xl font-bold mb-1">{title}</h2>
        <p className="text-gray-500 mb-2">{description}</p>
        <span className="text-lg font-semibold text-primary">{price}</span>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <span className="text-xs text-gray-400">
          Chủ sở hữu: <span className="font-mono">{owner}</span>
        </span>
        <Button>Mua ngay</Button>
      </CardFooter>
    </Card>
  );
}
