import React, { useState } from 'react'
import { AllStars, RatedComponentWrapper } from './styles'
import { ReactComponent as Star } from '../../assets/star.svg'
import { SubTitle } from '../commonStyles'

interface RateProps {
    title: string
    handleCLick: (a: number, b: string) => void
    id: string
}


const RateComponent: React.FC<RateProps> = ({ title, handleCLick, id }) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
        <RatedComponentWrapper>
            <SubTitle>
                {title}
            </SubTitle>
            <AllStars className="stars">
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <Star
                            onClick={() => {
                                setRating(index)
                                handleCLick(index, id)
                            }
                            }
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                            style={
                                { fill: `${index <= (hover || rating) ? '#11c4b0' : '#d3d3d3'}` }
                            }

                        />
                    );
                })}
            </AllStars>

        </RatedComponentWrapper>
    )
}

export default RateComponent
