import Image from "next/image";
import styles from "../../styles/About.module.css";

export default function About() {
    return(
        <div className={styles.about}>
        <h1>Página de ABOUT</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim vitae neque finibus sodales at non nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas cursus dapibus velit nec dictum. Morbi malesuada lorem dictum, ultrices odio sed, venenatis velit. Phasellus ut orci quis lorem bibendum ullamcorper vel in libero. Proin eleifend ultrices ultrices. Sed consectetur augue ut ante consequat, eget dictum magna molestie. Quisque dignissim ante quis tincidunt ornare. Nullam interdum rhoncus nisi eget interdum.</p>
        <Image src="/images/charizard.png" width="300" height="300" alt="Imagem de pokemon Charizard" />
        </div>
    )
}