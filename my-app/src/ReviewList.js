// import React from "react";

// const ReviewList = ({ reviews }) => {
//   return (
//     <div>
//       {reviews.map((review) => (
//         <div key={review.review_id} className="review">
//           <h3>{review.reviewer_name}</h3>
//           <p>{review.content}</p>
//           <p>Date: {review.date}</p>
//           <p>Rating: {review.rating_review_score} / {review.out_of}</p>
//           {review.analytics.length > 0 && (
//             <div>
//               <h4>Sentiment Analysis:</h4>
//               {review.analytics.map((analysis, index) => (
//                 <div key={index}>
//                   <p>{analysis.sentiment}: {analysis.sentences.join(" ")}</p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ReviewList;

// import React from "react";

// const ReviewList = ({ reviews }) => {
//   const highlightColor = (sentiment) => {
//     switch (sentiment) {
//       case "Positive":
//         return "#D9F2DD";
//       case "Negative":
//         return "#F2DBD9";
//       case "Mixed":
//         return "#e8bd6d3d";
//       case "Neutral":
//         return "#eaf09b6b";
//       default:
//         return "inherit";
//     }
//   };

//   return (
//     <div>
//       {reviews.map((review) => (
//         <div key={review.review_id} className="review">
//           <h3>{review.reviewer_name}</h3>
//           {review.analytics.length > 0 && (
//             <div>
//               <h4>Sentiment Analysis:</h4>
//               {review.analytics.map((analysis, index) => (
//                 <div key={index}>
//                   <p>
//                     {analysis.sentences.map((sentence, idx) => (
//                       <span
//                         key={idx}
//                         style={{
//                           backgroundColor: highlightColor(analysis.sentiment),
//                           padding: "0.2rem",
//                           borderRadius: "3px",
//                           margin: "0.2rem",
//                         }}
//                       >
//                         {sentence}
//                       </span>
//                     ))}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ReviewList;

// import React, { useState } from "react";

// const ReviewList = ({ reviews }) => {
//   const [tooltipContent, setTooltipContent] = useState(null);

//   const highlightColor = (sentiment) => {
//     switch (sentiment) {
//       case "Positive":
//         return "#D9F2DD";
//       case "Negative":
//         return "#F2DBD9";
//       case "Mixed":
//         return "#e8bd6d3d";
//       case "Neutral":
//         return "#eaf09b6b";
//       default:
//         return "inherit";
//     }
//   };

//   const handleMouseEnter = (sentiment, topic) => {
//     setTooltipContent({ sentiment, topic });
//   };

//   const handleMouseLeave = () => {
//     setTooltipContent(null);
//   };

//   return (
//     <div>
//       {reviews.map((review) => (
//         <div key={review.review_id} className="review">
//           <h3>{review.reviewer_name}</h3>
//           {review.analytics.length > 0 && (
//             <div>
//               <h4>Sentiment Analysis:</h4>
//               {review.analytics.map((analysis, index) => (
//                 <div key={index}>
//                   <p>
//                     {analysis.sentences.map((sentence, idx) => (
//                       <span
//                         key={idx}
//                         style={{
//                           backgroundColor: highlightColor(analysis.sentiment),
//                           padding: "0.2rem",
//                           borderRadius: "3px",
//                           margin: "0.2rem",
//                           cursor: "pointer",
//                         }}
//                         onMouseEnter={() =>
//                           handleMouseEnter(analysis.sentiment, analysis.topic)
//                         }
//                         onMouseLeave={handleMouseLeave}
//                       >
//                         {sentence}
//                       </span>
//                     ))}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//       {tooltipContent && (
//         <div
//           style={{
//             position: "fixed",
//             top: tooltipContent.top,
//             left: tooltipContent.left,
//             backgroundColor: "rgba(0, 0, 0, 0.7)",
//             color: "#fff",
//             padding: "0.5rem",
//             borderRadius: "5px",
//           }}
//         >
//           <p>Sentiment: {tooltipContent.sentiment}</p>
//           <p>Topic: {tooltipContent.topic}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ReviewList;

// import React, { useState } from "react";

// const ReviewList = ({ reviews }) => {
//   const [tooltipContent, setTooltipContent] = useState(null);

//   const highlightColor = (sentiment) => {
//     switch (sentiment) {
//       case "Positive":
//         return "#D9F2DD";
//       case "Negative":
//         return "#F2DBD9";
//       case "Mixed":
//         return "#e8bd6d3d";
//       case "Neutral":
//         return "#eaf09b6b";
//       default:
//         return "inherit";
//     }
//   };

//   const handleMouseEnter = (event, sentiment, topic) => {
//     const { clientX, clientY } = event;
//     setTooltipContent({ sentiment, topic, left: clientX, top: clientY });
//   };

//   const handleMouseLeave = () => {
//     setTooltipContent(null);
//   };

//   return (
//     <div>
//       {reviews.map((review) => (
//         <div key={review.review_id} className="review">
//           <h3>{review.reviewer_name}</h3>
//           {review.analytics.length > 0 && (
//             <div>
//               <h4>Sentiment Analysis:</h4>
//               {review.analytics.map((analysis, index) => (
//                 <div key={index}>
//                   <p>
//                     {analysis.sentences.map((sentence, idx) => (
//                       <span
//                         key={idx}
//                         style={{
//                           backgroundColor: highlightColor(analysis.sentiment),
//                           padding: "0.2rem",
//                           borderRadius: "3px",
//                           margin: "0.2rem",
//                           cursor: "pointer",
//                         }}
//                         onMouseEnter={(event) =>
//                           handleMouseEnter(
//                             event,
//                             analysis.sentiment,
//                             analysis.topic
//                           )
//                         }
//                         onMouseLeave={handleMouseLeave}
//                       >
//                         {sentence}
//                       </span>
//                     ))}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//       {tooltipContent && (
//         <div
//           style={{
//             position: "fixed",
//             top: tooltipContent.top,
//             left: tooltipContent.left,
//             backgroundColor: "rgba(0, 0, 0, 0.7)",
//             color: "#fff",
//             padding: "0.5rem",
//             borderRadius: "5px",
//           }}
//         >
//           <p>Sentiment: {tooltipContent.sentiment}</p>
//           <p>Topic: {tooltipContent.topic}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ReviewList;

// import React, { useState } from "react";

// const ReviewList = ({ reviews }) => {
//   const [tooltipContent, setTooltipContent] = useState(null);

//   const highlightColor = (sentiment) => {
//     switch (sentiment) {
//       case "Positive":
//         return "#D9F2DD";
//       case "Negative":
//         return "#F2DBD9";
//       case "Mixed":
//         return "#e8bd6d3d";
//       case "Neutral":
//         return "#eaf09b6b";
//       default:
//         return "inherit";
//     }
//   };

//   const handleMouseEnter = (event, sentiment, topic) => {
//     const { clientX, clientY } = event;

//     // Get the height of the tooltip to adjust its position
//     const tooltipHeight = 60; // Adjust this value as needed

//     // Calculate the vertical position of the tooltip
//     const top = clientY + tooltipHeight > window.innerHeight + window.scrollY
//       ? window.innerHeight + window.scrollY - tooltipHeight
//       : clientY;

//     setTooltipContent({ sentiment, topic, left: clientX, top });
//   };

//   const handleMouseLeave = () => {
//     setTooltipContent(null);
//   };

//   return (
//     <div>
//       {reviews.map((review) => (
//         <div key={review.review_id} className="review">
//           <h3>{review.reviewer_name}</h3>
//           {review.analytics.length > 0 && (
//             <div>
//               {/* <h4>Sentiment Analysis:</h4> */}
//               {review.analytics.map((analysis, index) => (
//                 <div key={index}>
//                   <p>
//                     {analysis.sentences.map((sentence, idx) => (
//                       <span
//                         key={idx}
//                         style={{
//                           backgroundColor: highlightColor(analysis.sentiment),
//                           padding: "0.2rem",
//                           borderRadius: "3px",
//                           margin: "0.2rem",
//                           cursor: "pointer",
//                         }}
//                         onMouseEnter={(event) =>
//                           handleMouseEnter(
//                             event,
//                             analysis.sentiment,
//                             analysis.topic
//                           )
//                         }
//                         onMouseLeave={handleMouseLeave}
//                       >
//                         {sentence}
//                       </span>
//                     ))}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//       {tooltipContent && (
//         <div
//           style={{
//             position: "fixed",
//             top: tooltipContent.top,
//             left: tooltipContent.left,
//             backgroundColor: "rgba(0, 0, 0, 0.7)",
//             color: "#fff",
//             padding: "0.5rem",
//             borderRadius: "5px",
//           }}
//         >
//           {/* <p>Sentiment: {tooltipContent.sentiment}</p> */}
//           <p>Sentiment: {tooltipContent.sentiment}</p>
//           <p>Topic: {tooltipContent.topic}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ReviewList;

// import React, { useState } from "react";

// const ReviewList = ({ reviews }) => {
//   const [tooltipContent, setTooltipContent] = useState(null);

//   const highlightColor = (sentiment) => {
//     switch (sentiment) {
//       case "Positive":
//         return "#D9F2DD";
//       case "Negative":
//         return "#F2DBD9";
//       case "Mixed":
//         return "#e8bd6d3d";
//       case "Neutral":
//         return "#eaf09b6b";
//       default:
//         return "inherit";
//     }
//   };

//   const handleMouseEnter = (event, sentiment, topic) => {
//     const { clientX, clientY } = event;
//     setTooltipContent({ sentiment, topic, left: clientX, top: clientY });
//   };

//   const handleMouseLeave = () => {
//     setTooltipContent(null);
//   };

//   const highlightSentences = (sentence, indices) => {
//     const parts = [];
//     let lastIndex = 0;

//     indices.forEach(([startIndex, endIndex, sentiment], index) => {
//       const beforeHighlight = sentence.substring(lastIndex, startIndex);
//       const highlighted = (
//         <span
//           key={index}
//           style={{
//             backgroundColor: highlightColor(sentiment),
//             padding: "0.2rem",
//             borderRadius: "3px",
//             margin: "0.2rem",
//             cursor: "pointer",
//           }}
//           onMouseEnter={(event) => handleMouseEnter(event, sentiment, reviews.topic)}
//           onMouseLeave={handleMouseLeave}
//         >
//           {sentence.substring(startIndex, endIndex)}
//         </span>
//       );
//       parts.push(beforeHighlight, highlighted);
//       lastIndex = endIndex;
//     });

//     const remaining = sentence.substring(lastIndex);
//     parts.push(remaining);
//     return parts;
//   };

//   return (
//     <div>
//       {reviews.map((review) => (
//         <div key={review.review_id} className="review">
//           <h3>{review.reviewer_name}</h3>
//           {review.analytics.length > 0 && (
//             <div>
//               <h4>Sentiment Analysis:</h4>
//               {review.analytics.map((analysis, index) => (
//                 <div key={index}>
//                   <p>
//                     {analysis.sentences.map((sentence, idx) => (
//                       <div key={idx}>
//                         {analysis.highlight_indices ? (
//                           highlightSentences(sentence, analysis.highlight_indices)
//                         ) : (
//                           <span
//                             style={{
//                               backgroundColor: highlightColor(analysis.sentiment),
//                               padding: "0.2rem",
//                               borderRadius: "3px",
//                               margin: "0.2rem",
//                               cursor: "pointer",
//                             }}
//                             onMouseEnter={(event) =>
//                               handleMouseEnter(event, analysis.sentiment, analysis.topic)
//                             }
//                             onMouseLeave={handleMouseLeave}
//                           >
//                             {sentence}
//                           </span>
//                         )}
//                       </div>
//                     ))}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//       {tooltipContent && (
//         <div
//           style={{
//             position: "fixed",
//             top: tooltipContent.top,
//             left: tooltipContent.left,
//             backgroundColor: "rgba(0, 0, 0, 0.7)",
//             color: "#fff",
//             padding: "0.5rem",
//             borderRadius: "5px",
//           }}
//         >
//           <p>Sentiment: {tooltipContent.sentiment}</p>
//           <p>Topic: {tooltipContent.topic}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ReviewList;

// import React, { useState } from "react";

// const ReviewList = ({ reviews }) => {
//   const [tooltipContent, setTooltipContent] = useState(null);

//   const highlightColor = (sentiment) => {
//     switch (sentiment) {
//       case "Positive":
//         return "#D9F2DD";
//       case "Negative":
//         return "#F2DBD9";
//       case "Mixed":
//         return "#e8bd6d3d";
//       case "Neutral":
//         return "#eaf09b6b";
//       default:
//         return "inherit";
//     }
//   };

//   const handleMouseEnter = (event, sentiment, topic) => {
//     const { clientX, clientY } = event;
//     setTooltipContent({ sentiment, topic, left: clientX, top: clientY });
//   };

//   const handleMouseLeave = () => {
//     setTooltipContent(null);
//   };

//   const highlightSentences = (content, highlightIndices) => {
//     const parts = [];
//     let lastIndex = 0;

//     highlightIndices.forEach(([startIndex, endIndex, sentiment], index) => {
//       const beforeHighlight = content.substring(lastIndex, startIndex);
//       const highlighted = (
//         <span
//           key={index}
//           style={{
//             backgroundColor: highlightColor(sentiment),
//             padding: "0.2rem",
//             borderRadius: "3px",
//             margin: "0.2rem",
//             cursor: "pointer",
//           }}
//           onMouseEnter={(event) => handleMouseEnter(event, sentiment, reviews.topic)}
//           onMouseLeave={handleMouseLeave}
//         >
//           {content.substring(startIndex, endIndex)}
//         </span>
//       );
//       parts.push(beforeHighlight, highlighted);
//       lastIndex = endIndex;
//     });

//     const remaining = content.substring(lastIndex);
//     parts.push(remaining);
//     return parts;
//   };

//   return (
//     <div>
//       {reviews.map((review) => (
//         <div key={review.review_id} className="review">
//           <h3>{review.reviewer_name}</h3>
//           {review.analytics.length > 0 && (
//             <div>
//               <h4>Sentiment Analysis:</h4>
//               {review.analytics.map((analysis, index) => (
//                 <div key={index}>
//                   <p>
//                     {highlightSentences(review.content, analysis.highlight_indices)}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//       {tooltipContent && (
//         <div
//           style={{
//             position: "fixed",
//             top: tooltipContent.top,
//             left: tooltipContent.left,
//             backgroundColor: "rgba(0, 0, 0, 0.7)",
//             color: "#fff",
//             padding: "0.5rem",
//             borderRadius: "5px",
//           }}
//         >
//           <p>Sentiment: {tooltipContent.sentiment}</p>
//           <p>Topic: {tooltipContent.topic}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ReviewList;

import React, { useState } from "react";
import StarRating from "./StarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faUserPlus,
  faBookmark,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

const ReviewList = ({ reviews }) => {
  const [tooltipContent, setTooltipContent] = useState(null);

  const highlightColor = (sentiment) => {
    switch (sentiment) {
      case "Positive":
        return "#D9F2DD";
      case "Negative":
        return "#F2DBD9";
      case "Mixed":
        return "#e8bd6d3d";
      case "Neutral":
        return "#eaf09b6b";
      default:
        return "inherit";
    }
  };

  const handleMouseEnter = (event, sentiment, topic) => {
    const { clientX, clientY } = event;
    setTooltipContent({ sentiment, topic, left: clientX, top: clientY });
  };

  const handleMouseLeave = () => {
    setTooltipContent(null);
  };

  const highlightSentences = (content, highlightIndices, topic) => {
    const parts = [];
    let lastIndex = 0;

    highlightIndices.forEach(([startIndex, endIndex, sentiment], index) => {
      const beforeHighlight = content.substring(lastIndex, startIndex);
      const highlighted = (
        <span
          key={index}
          style={{
            backgroundColor: highlightColor(sentiment),
            padding: "0.2rem",
            borderRadius: "3px",
            margin: "0.2rem",
            cursor: "pointer",
          }}
          onMouseEnter={(event) => handleMouseEnter(event, sentiment, topic)}
          onMouseLeave={handleMouseLeave}
        >
          {content.substring(startIndex, endIndex)}
        </span>
      );
      parts.push(beforeHighlight, highlighted);
      lastIndex = endIndex;
    });

    const remaining = content.substring(lastIndex);
    parts.push(remaining);
    return parts;
  };

  return (
    <div>
      {reviews.map((review) => (
        <div
          key={review.review_id}
          className="review"
          style={{ marginLeft: "2rem" }}
        >
          <br />
          <span style={{ display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon
              icon={faUserCircle}
              style={{ marginRight: "0.5rem", fontSize: "1.5rem" }}
            />
            <span style={{ fontWeight: "bold" }}>{review.reviewer_name}</span>
            &nbsp;
            <span style={{ color: "lightgrey" }}> wrote a review at </span>
            &nbsp;
            <span style={{ fontWeight: "bold" }}>{review.source.name}</span>
            <span style={{ marginLeft: "auto", marginRight: "3rem" }}>
              <FontAwesomeIcon
                icon={faUserPlus}
                style={{
                  marginRight: "0.5rem",
                  fontSize: "1rem",
                  fontWeight: "normal",
                }}
              />
              <FontAwesomeIcon
                icon={faBookmark}
                style={{ marginRight: "0.5rem", fontSize: "1rem" }}
              />
              <FontAwesomeIcon
                icon={faEllipsis}
                style={{ marginRight: "0.5rem", fontSize: "1rem" }}
              />
            </span>
          </span>

          <div style={{ marginLeft: "2rem" }}>
            <br />
            <div style={{ display: "flex", alignItems: "center" }}>
              <StarRating rating={review.rating_review_score} />
              <h3
                style={{
                  marginRight: "1rem",
                  marginLeft: "10px",
                  fontSize: "0.8rem",
                  color: "grey",
                }}
              >
                {review.date}
              </h3>
            </div>
            {review.analytics.length > 0 && (
              <div style={{ marginRight: "3rem" }}>
                {review.analytics.map((analysis, index) => (
                  <div key={index}>
                    <p>
                      {highlightSentences(
                        review.content,
                        analysis.highlight_indices,
                        analysis.topic
                      )}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
      {tooltipContent && (
        <div
          style={{
            position: "fixed",
            top: tooltipContent.top,
            left: tooltipContent.left,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "#fff",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
        >
          <p>Topic: {tooltipContent.topic}</p>
        </div>
      )}
    </div>
  );
};

export default ReviewList;



