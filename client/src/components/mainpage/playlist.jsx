import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Playlist() {
  return (
    <div>
      <Card>
        <CardContent>
          <img src="/vite.svg" alt="hello" />
          <div>
            <CardTitle>Top 20 hits</CardTitle>
            <CardDescription>6.534.4534.453 Followers</CardDescription>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
