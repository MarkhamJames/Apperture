import React from 'react'

export default function ReviewList(props) {
  return (
    <>
      {props.currentUser &&
        props.reviews.map(review => (
          <div id='review-container' key={review.id}>
            {review.user &&
              <h2 id='display-name'>{review.user.username}</h2>
            }
            <div id='review-box'>
              <h4 id='review'>{review.content}</h4>
              {
                props.currentUser.id === review.user_id &&
                <h5 id='delete-review' onClick={() => props.destroyReview(review.localeId, review.id)}>Delete</h5>
              }
            </div>
          </div>
        ))
      }
    </>
  )
}
