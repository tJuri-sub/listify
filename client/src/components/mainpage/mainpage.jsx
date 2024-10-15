import { Header } from "./header";
import { Playlist } from "./playlist";

export function MainPage() {
  return (
    <div>
      <Header />
      <h1 className="text-xl font-bold  font-outfit">
        Welcome <span>Juri Turiano</span> !
      </h1>
      <Playlist />
    </div>
  );
}
