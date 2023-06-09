import React, { FC, ReactElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// Style
import styles from "./navLink.module.scss";

interface NavLinkProps {
    route: string;
    children: React.ReactNode;
}

const NavLink: FC<NavLinkProps> = (props): ReactElement => {

    const { route, children } = props;

    const pathname = usePathname();

    return (
        <Link href={route} legacyBehavior>
            <a className={pathname == route ? styles.active : styles.navLink}>{children}</a>
        </Link>
    );
};

export default NavLink;