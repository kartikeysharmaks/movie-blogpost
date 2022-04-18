import "./App.css";
import Header from "./Header";
import ProfileCard from "./ProfileCard.js";
import Footer from "./Footer.js";
import { useState, useEffect } from "react";

function App() {
  const [fullname, setFullname] = useState("Waitingfordata");
  const getRandomName = async () => {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    setFullname(data.results[0].name.first + " " + data.results[0].name.last);
    console.log(fullname);
    return fullname;
  };
  useEffect(() => {
    getRandomName();
  }, []);

  return (
    <>
      <Header />
      <ProfileCard
        image="https://wallpapercave.com/wp/YdO66Xi.jpg"
        Title="Ice Age Movie Series"
        Rating="7"
        Description='Ice Age is an American franchise created by Blue Sky Studios, starting with its first film in 2002. It follows a group of mammals living in the ice age in prehistoric times. Originally just Sid the sloth, Manny the mammoth, and Diego the saber-toothed cat, later films add more characters to their "herd".'
      />
      <ProfileCard
        image="https://wallpapercave.com/dwp1x/7nxmEKs.jpg"
        Title="Aladdin"
        Rating="8"
        Description="Aladdin is the titular protagonist of Disneys 1992 animated feature film of the same name. A former street rat from the city of Agrabah, Aladdin spent much of his youth scraping for food and ducking guards with his monkey sidekick Abu."
      />
      <ProfileCard
        image="https://th.bing.com/th/id/OIP.KxNFRyTxNoVCQM6PxFInmgHaFj?w=225&h=180&c=7&r=0&o=5&pid=1.7"
        Title="Mickey Mouse"
        Rating="7.5"
        Description="Mickey Mouse is a cartoon character created in 1928 by Walt Disney, and is the mascot of The Walt Disney Company. An anthropomorphic mouse who typically wears red shorts, large yellow shoes, and white gloves, Mickey is one of the worlds most recognizable fictional characters "
      />{" "}
      <ProfileCard
        image="https://th.bing.com/th/id/OIP.ZfleklJUaa49x4S980UnEAHaEK?w=317&h=180&c=7&r=0&o=5&pid=1.7"
        Title="SuperMan"
        Rating="8"
        Description="Superman is a superhero published by DC Comics since 1938. An alien named Kal-El from the destroyed planet Krypton. He was sent to Earth and raised as Clark Kent by human foster parents, Martha and Jonathan Kent. As an adult, Superman became the protector of Earth, working at the Daily Planet as Clark Kent alongside his partner and wife Lois Lane."
      />
      <ProfileCard
        image="https://th.bing.com/th/id/OIP.dJazaJnJ5cDIszScf2lmCAHaG8?w=199&h=187&c=7&r=0&o=5&pid=1.7"
        Title="BatMan"
        Rating="10"
        Description="The Batman is the superhero protector of Gotham City, a tortured, brooding vigilante dressed as a bat who fights against evil and strikes fear into the hearts of criminals everywhere."
      />
      <ProfileCard
        image="https://th.bing.com/th/id/OIP.dOQNaBdCfNpTrnRN4FsPMwHaEK?w=299&h=180&c=7&r=0&o=5&pid=1.7"
        Title="Cindrella"
        Rating="8.5"
        Description="Cinderella is a young woman with medium-length strawberry-blonde hair, blue eyes, and fair complexion. After her father dies, she is forced into servitude in her own home and is tormented by her evil stepmother, Lady Tremaine, and two stepsisters, Anastasia and Drizella."
      />
      <ProfileCard
        image="https://th.bing.com/th/id/OIP.12N5FZN_UUx5aPEYo6n5HAHaEK?w=316&h=180&c=7&r=0&o=5&pid=1.7"
        Title="Winnie-The Pooh"
        Rating="6"
        Description="Winnie-the-Pooh, or Pooh for short, is a soft-voiced, loveable and quiet anthropomorphic bear who is the protagonist. Despite being naive and slow-witted, he is a friendly, thoughtful, and sometimes insightful character who is always willing to help his friends and try his best."
      />
      <ProfileCard
        image="https://th.bing.com/th/id/OIP.cFeK_0WA8AAL7W5nyPUBEgHaFj?w=224&h=180&c=7&r=0&o=5&pid=1.7"
        Title="Tweety"
        Rating="9"
        Description='Tweety is a yellow canary in the Warner Bros. Looney Tunes and Merrie Melodies series of animated cartoons. The name "Tweety" is a play on words, as it originally meant "sweetie", along with "tweet" being an English onomatopoeia for the sounds of birds. His characteristics are based on Red Skelton s famous "Junior the Mean Widdle Kid'
      />{" "}
      <ProfileCard
        image="https://th.bing.com/th/id/OIP.duZ6iKwTbkGrmginrS-HFwHaEK?w=326&h=183&c=7&r=0&o=5&pid=1.7"
        Title="Doreman"
        Rating="9.5"
        Description="Doraemon is a blue cat automaton corresponding (tints of pink-orange in earlier comic chapters and media) from the 22nd century!"
      />
      <ProfileCard
        image={`https://robohash.org/${Math.random()}.png`}
        Title={fullname}
      />{" "}
      <ProfileCard
        image={`https://robohash.org/${Math.random()}.png`}
        Title={fullname}
      />{" "}
      <ProfileCard
        image={`https://robohash.org/${Math.random()}.png`}
        Title={fullname}
      />{" "}
      <Footer />
    </>
  );
}

export default App;
