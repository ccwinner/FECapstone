
const mainStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
  padding: "20px",
  backgroundColor: "#f0fff0"
};
const sectionStyle: React.CSSProperties = {
  flex: 1,
  margin: "0 3%",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  textAlign: "left"
};

export const About = () => {
  return (
  <div style={{backgroundColor: "#f0fff0"}}>
    <h1 style={{color: "red", fontFamily: "Italic", fontSize: "30px"}}>About</h1>
    <div style={mainStyle}>
      <section style={sectionStyle}>
        <article>
          <h2>Our History</h2>
          <img src={require("./little-lemon1.png")} alt="Our History" width="100px" style={{float: "left", borderRadius: "8px", margin: "0 10px"}}/>
          <p>
            Little Lemon is a restaurant that specializes in Mediterranean cuisine. It is located in the heart of the city and is known for its delicious food and friendly staff.
          </p>
        </article>
      </section>
      <section style={sectionStyle}>
        <article>
          <h2>Our Team</h2>
          <p>
            Our team is made up of experienced chefs and servers who are passionate about food and hospitality.
          </p>
        </article>
      </section>
    </div>
  </div>
  );
}
