import estilos from "./Container.module.css";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container() {
  return <div className={estilos.container}></div>;
}
