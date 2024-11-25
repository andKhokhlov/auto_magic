import React from 'react';

class ScrollButton extends React.Component {
    scrollToOffset(offset, duration) {
        const start = window.pageYOffset;
        const target = offset;
        const distance = target - start;
        const startTime = performance.now();

        function scrollAnimation(currentTime) {
            const elapsedTime = currentTime - startTime;
            const scroll = easeInOut(elapsedTime, start, distance, duration);
            window.scrollTo(0, scroll);
            if (elapsedTime < duration) {
                requestAnimationFrame(scrollAnimation);
            }
        }

        function easeInOut(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(scrollAnimation);
    }

    render() {
        return (
            <button onClick={() => this.scrollToOffset(this.props.offset, this.props.duration)} className="RegisterButton">

                    <div className='RegisterButtonTitle'>
                        Выбрать мечту
                    </div>
                    <div className='RegisterButtonSubtitle'>
                        Есть 21 год и 2 года стажа
                    </div>

            </button>
        );
    }
}

export default ScrollButton;