import styles from "./authLinks.module.css";
import Link from "next/link";

const AuthLinks = () => {
    const status = "notauthenticated"; // This would typically come from your auth context or state management
    return <>
    {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
    ) : (
        <>
        <Link href="/write">Write</Link>
        <span className={styles.link}>Logout</span>
        </>
    )}
    </>;
};

export default AuthLinks;