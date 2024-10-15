import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileMusic, FileMusicIcon } from "lucide-react";

export function SignUp() {
  return (
    <div className="flex justify-center items-center h-dvh">
      <form>
        <Card className="w-[400px] drop-shadow-lg">
          <CardHeader>
            <CardTitle className="flex">
              <FileMusic />
              Listify
            </CardTitle>
            <CardDescription>Sign up an account</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="username"
              />
              <Input type="email" name="email" id="email" placeholder="email" />
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <Input
                type="password"
                name="confirmPass"
                id="confirmPass"
                placeholder="confirm password"
              />
              <Button>Sign up</Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
