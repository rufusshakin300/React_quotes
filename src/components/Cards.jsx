import React from 'react'
import'./Cards.css'
const Cards = () => {
    var quotes = [{
		id: 1,
		text: "I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures.",
		source: "Lao Tzu"
	},
	{
		id: 2,
		text: "Do today what others won't and achieve tomorrow what others can't.",
		source: "Jerry Rice"
	},
	{
		id: 3,
		text: "In character, in manner, in style, in all things, the supreme excellence is simplicity.",
		source: "Henry Wadsworth Longfellow"
	},
	{
		id: 4,
		text: "If we don't discipline ourselves, the world will do it for us.",
		source: "William Feather"
	},
	{
		id: 5,
		text: "Rule your mind or it will rule you.",
		source: "Horace"
	},
	{
		id: 6,
		text: "All that we are is the result of what we have thought.",
		source: "Buddha"
	},
	{
		id: 7,
		text: "Doing just a little bit during the time we have available puts you that much further ahead than if you took no action at all.",
		source: "Pulsifer, Take Action; Don't Procrastinate"
	},
	{
		id: 8,
		text: "Never leave that till tomorrow which you can do today.",
		source: "Benjamin Franklin"
	},
	{
		id: 9,
		text: "Procrastination is like a credit card: it's a lot of fun until you get the bill.",
		source: "Christopher Parker"
	},
	{
		id: 10,
		text: "Someday is not a day of the week.",
		source: "Author Unknown"
	},
	{
		id: 11,
		text: "Tomorrow is often the busiest day of the week.",
		source: "Spanish Proverb"
	},
	{
		id: 12,
		text: "I can accept failure, everyone fails at something. But I can't accept not trying.",
		source: "Michael Jordan"
	},
    ]
    // const quote = quotes.find(quote => quote.id === 1);
  return (  
    <>
    <div className="container">
        <div className="card text-bg-dark mb-3" style={{width:'max-content'}}>
            <div className="card-body">
            <h5 className="card-title text-center">Card title</h5>
                <p>{quotes[2].text}</p>
                <p className='text-end'>~{quotes[2].source}</p>
				<div className="row">
					<div class="col text-start">
						<a href="https://twitter.com/" class="btn tweet fw-semibold">Tweet</a>
      				</div>
					<div class="col text-end">
						<button type="button" class="btn btn-success round mt-1 ">Next quote</button>
					</div>										
				</div>							    
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Cards