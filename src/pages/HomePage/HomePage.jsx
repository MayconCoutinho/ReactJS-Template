import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { StarBackgroud } from "../../components/starBackgroud";
import { Welcome } from "../../components/welcome";
import { ContainerCSS, Space } from "./styled";

const HomePage = () => {
	return (
		<ContainerCSS>
			<Header />
			<StarBackgroud />
			<Space />
			<Welcome />
			<Footer />
		</ContainerCSS>
	);
};
export default HomePage;
