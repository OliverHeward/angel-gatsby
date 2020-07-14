import React from "react"

const QuoteBox = copy => {
  return (
    <div className="quote-box">
        <svg xmlns="http://www.w3.org/2000/svg" data-name="quote" viewBox="0 0 149.98 115.06" className="quote-svg quote-svg-left"><defs><style></style></defs><polygon className="quote-left" points="66.2 67.14 36.84 105.35 36.84 67.14 7.48 67.14 7.48 8.42 66.2 8.42 66.2 67.14"/><polygon className="quote-left" points="141.69 67.14 112.33 105.35 112.33 67.14 82.97 67.14 82.97 8.42 141.69 8.42 141.69 67.14"/></svg>
      <h2 className="quote">{copy.copy}</h2>
      <svg xmlns="http://www.w3.org/2000/svg" className="quote-svg  quote-svg-right" data-name="quote" viewBox="0 0 149.98 115.06"><defs><style></style></defs><polygon className="quote-right" points="66.2 67.14 36.84 105.35 36.84 67.14 7.48 67.14 7.48 8.42 66.2 8.42 66.2 67.14"/><polygon className="quote-right" points="141.69 67.14 112.33 105.35 112.33 67.14 82.97 67.14 82.97 8.42 141.69 8.42 141.69 67.14"/></svg>
    </div>
  )
}

export default QuoteBox
