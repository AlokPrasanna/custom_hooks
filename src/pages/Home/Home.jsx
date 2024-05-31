import React, { useState } from 'react';
import { PrimaryButton, Item } from '../../components/index';
import { useFetch } from '../../hooks';
import { BounceLoader } from 'react-spinners';
import './home.css';

const Home = () => {
  const [endpoint, setEndpoint] = useState("posts");
  const [itemColor, setItemColor] = useState("#FF9A00");
  const { data, loading, error } = useFetch({ path: endpoint });

  const handleButtonClick = ({ path, color }) => {
    setEndpoint(path);
    setItemColor(color);
  };

  return (
    <div className='home'>
      <div className='primaryButtons'>
        <PrimaryButton
          buttonName="Post"
          buttonColor="#430A5D"
          onClickFunc={() => handleButtonClick({ path: "posts", color: "#430A5D" })}
        />
        <PrimaryButton
          buttonName="Comments"
          buttonColor="#FF0000"
          onClickFunc={() => handleButtonClick({ path: "comments", color: "#FF0000" })}
        />
        <PrimaryButton
          buttonName="Albums"
          buttonColor="#54B435"
          onClickFunc={() => handleButtonClick({ path: "albums", color: "#54B435" })}
        />
        <PrimaryButton
          buttonName="Todos"
          buttonColor="#F97300"
          onClickFunc={() => handleButtonClick({ path: "todos", color: "#F97300" })}
        />
        <PrimaryButton
          buttonName="Users"
          buttonColor="#0D1282"
          onClickFunc={() => handleButtonClick({ path: "users", color: "#0D1282" })}
        />
      </div>
      <div className='content'>
        <div className='innerContent'>
          {loading && (
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh"
            }}>
              <BounceLoader
                color="rgba(54, 215, 183, 1)"
                size={50}
                speedMultiplier={3}
              />
            </div>
          )}
          {error && <p>Error: {error.message}</p>}
          {data && data.length > 0 && data.map(item => (
            <Item
              key={item.id}
              id={item.id.toString()}
              title={item.title || item.name}
              bgColor={itemColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
