React App for Review Sentiment Analysis
### Task 1: Setup and Display Reviews
1. Create a new React application on the codepen.io
2. Create a component named `ReviewList` to fetch and display reviews from the provided
JSON file.
3. The reviews data is present in a file named ‘reviewsData.json’. You can download the file
from the given link
### Task 2: Highlight Sentences and Apply Colors
1. Implement a component called `ReviewHighlighter` to display reviews and highlight
sentences based on sentiment.
2. Use the `analytics` property in each review to determine sentences and their corresponding
sentiments.
3. Apply colors to sentences based on sentiment (e.g., color code for each sentiment is given in
the resource section).
### Task 3: Tooltip with Sentiment Topics
1. Create a `Tooltip` component that appears on hovering over highlighted sentences.
2. Extract the sentiment topic from the analytics data and display it in the tooltip.
### Task 4: Design and Styling
1. Design the UI based on the provided screenshots, ensuring a clean and user-friendly
interface.
2. Apply CSS styles to the components for proper formatting and alignment.
3. Use the provided highlight colours for each sentiment.
### Task 5: Optional - Use Highlight Indices
1. If the candidate wants an additional challenge, implement the optional `highlight_indices`
property to highlight sentences using specific start and end indices.
### Description of properties in the review object
Example:
{
"reviewer_name": "Barbara",
"content": "We had a relaxing time ❤.\n\n[Positive]: The spa was excellent. We had a wonderful
relaxing time! [Negative]: The food choices at the Rowe restaurant. Parking should be included in your
stay because you pay a lot to stay here already.",
"raw_content": "We had a relaxing time ❤.\n\n[Positive]: The spa was excellent. We had a wonderful
relaxing time! [Negative]: The food choices at the Rowe restaurant. Parking should be included in your
stay because you pay a lot to stay here already.",
"date": "05 Dec 2023",
"rating_review_score": 10.0,
"out_of": 10.0,
"source_language": "en",
"source": {
"name": "booking.com",
"icon": "https://reviewmagic.innspire.com:8001/media/sources/booking3.png",
},
"analytics": [
{
"category": "spa",
"topic": "spa",
"phrases": ["spa", "spa"],
"sentences": ["The spa was excellent"],
"sentiment": "Positive",
"highlight_indices": [
[40, 61, "Positive"]
]
},
{
"category": "facilities",
"topic": "facilities",
"phrases": ["parking", "parking"],
"sentences": ["Parking should be included in your stay because you pay a lot to stay here already"],
"sentiment": "Negative",
"highlight_indices":
[ [155, 237, "Negative"]
]
}
],
}
Description:
● reviewer_name: Name of the reviewer.
● content: The main text content of the review.
● raw_content: Unmodified original content of the review.
● date: Date when the review was posted.
● rating_review_score: Numeric rating given by the reviewer.
● out_of: Maximum rating possible (e.g., 10.0).
● source: Information about the source of the review.
○ name: Name of the source (eg: booking.com).
○ icon: Icon of the source.
● source_language: Language in which the review is written.
● analytics: Array containing sentiment analytics for specific categories.
○ category: Category associated with the analytics.
○ topic: Topic associated with analytics.
○ phrases: Phrases related to analytics.
○ sentences: Extracted sentences related to the analytics.
○ sentiment: Sentiment of the analytics.
○ highlight_indices: Array containing start and end indices for highlighted
sentences.

Color code for each sentiment:
● Positive: #D9F2DD
● Negative: #F2DBD9
● Mixed: #e8bd6d3d
● Neutral: #eaf09b6b
