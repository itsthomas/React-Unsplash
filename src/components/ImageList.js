import React from "react";

const ImageList = props => {
  console.log(props);
  // map method generates a new Array
  const list = props.images.map(item => {
    return (
      <div className="item" key={item.id}>
        <img src={item.urls.regular} alt={item.description} />
      </div>
    );
  });

  return <>{list}</>;
};

export default ImageList;

// Second way: We could just return the map resutl
// const ImageList = props => {
//   // map method generates a new Array
//   return props.images.map((item, index) => {
//     return (
//       <img
//         style={{ maxWidth: '68vw' }}
//         key={index}
//         className="image-container"
//         src={item.urls.regular}
//         alt={description}
//       />
//     );
//   });
// };

// export default ImageList;

// ========== 3. Using destructuring =========
// const ImageList = props => {
//   console.log(props);
//   // map method generates a new Array
//   const list = props.images.map(({ id, urls, description }) => {
//     return (
//       <img
//         style={{ maxWidth: '78vw' }}
//         key={id}
//         src={urls.regular}
//         alt={description}
//       />
//     );
//   });

//   return <div>{list}</div>;
// };

// export default ImageList;
