export const MoreDetails = ({ data, isOpen }) => {
  const {
    // Title,
    // Year,
    // Rated,
    // Released,
    // Runtime,
    // Genre,
    // Director,
    // Writer,
    // Actors,
    Plot,
    // Language,
    // BoxOffice
  } = data;

  if (isOpen) {
    return <p>{Plot}</p>;
  } else {
    return <></>;
  }
};
