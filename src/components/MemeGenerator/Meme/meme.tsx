import { useEffect, useRef, SyntheticEvent } from 'react';
import styles from './meme.module.scss';


interface MemeProps {
    /**
         * First of two phrase to use in meme generation
         */
    firstPhrase?: string,
    /**
     * Second of two phrases to use in meme generation
     */
    secondPhrase?: string,

    /**
     * URL of the meme image.
     *
     * {@link firstPhrase} and {@link secondPhrase} will be superimposed on this image.
     */
    memeImageUrl?: string,


    /**
     * Alt text of the meme image
     */
    memeImageAltText?: string
}

/**
 * Meme panel which shows the specified image with  specified two text phrases superimposed on it.
 *
 */
const Meme = ({ firstPhrase, secondPhrase, memeImageUrl, memeImageAltText }: MemeProps) => {
    const memeContainer = useRef<HTMLDivElement>(null);
    const memeTextContainer = useRef<HTMLDivElement>(null);
    const memeImageContainer = useRef<HTMLImageElement>(null);

    function resizeTextOverlay() {
        //HIDE text container
        //We will unhide at the end of
        //resize and reposition to fix the layout shift
        //of text container.
        //The layout shift was particularly
        //noticeable on first load to fix which I also gave
        //"display: none" to the text container in CSS
        //memeTextContainer.current!.style.display = "none";

        memeTextContainer.current!.style.width = memeImageContainer.current!.clientWidth + "px";

        memeTextContainer.current!.style.height = memeImageContainer.current!.clientHeight + "px";

        //debugger;
        // memeTextContainer.current!.style.top = memeImageContainer.current!.getBoundingClientRect().top + "px";

        memeTextContainer.current!.style.left = memeImageContainer.current!.getBoundingClientRect().left - memeContainer.current!.getBoundingClientRect().left + "px";

        //UNHIDE text container
        //memeTextContainer.current!.style.display = "grid";
    }

    function handleMemeLoad(event: SyntheticEvent<HTMLElement, Event>): void {

        //Need to do this gimmickry because the given
        //Figma layout was not responsive. So I
        //made the image centre itself if width
        //available was greater than its maximum width
        //I then couldn't make the meme text fid overlay
        //size itself to the (dynamic) size of the image
        //using CSS.
        //debugger;
        memeTextContainer.current!.style.display = "grid";
        resizeTextOverlay();


    }

    //need an effect to subscribe to window resize event
    //because during the render function, DOM is not
    //loaded (at least not guaranteed to be loaded).
    //NOTE resize event is not exposed on components
    //and, even in DOM, is only available on window object.
    useEffect(() => {

        function handleResize() {

            resizeTextOverlay();



        }

        window.addEventListener('resize', handleResize)

        //should return the cleanup function
        //to remove the event handler.
        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, []);//empty `[]` ensures the passed func only runs on mount
    return (
        <div className={styles.meme} onLoad={handleMemeLoad} ref={memeContainer}>
            <img src={memeImageUrl} alt={memeImageAltText}
                className={styles.meme__image}
                ref={memeImageContainer}
            />
            <div ref={memeTextContainer} className={styles.meme__textcontainer}>
                <span>{firstPhrase}</span>
                <span>{secondPhrase}</span>
            </div>
        </div>
    );
}

export default Meme;