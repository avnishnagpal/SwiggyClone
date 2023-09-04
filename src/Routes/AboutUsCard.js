const AboutUsCard = ({ name, location, contact }) => {
  return (
    <div class="user-card">
      <h1>{name}</h1>
      <h2>{location}</h2>
      <h3>{contact}</h3>
    </div>
  );
};

export default AboutUsCard;
