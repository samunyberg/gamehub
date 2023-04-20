import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const { data: platforms } = usePlatforms();
  const selectedPlatform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  const heading = `${selectedPlatform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="4xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
