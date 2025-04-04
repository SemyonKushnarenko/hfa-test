import Dropdown from "@/components/Dropdown/Dropdown";
import Exchanger from "@/components/Exchanger/Exchanger";
import Counter from "@/components/Counter/Counter";

export default function Home() {
  return (
    <div className="p-4 pt-6 flex flex-col gap-16">
      <Dropdown />
      <Exchanger />
      <Counter />
    </div>
  );
}
