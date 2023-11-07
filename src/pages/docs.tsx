import React, {useEffect} from 'react';

export default function Home(): JSX.Element {

    useEffect(() => {
        // window.location.href = '/category/introduction';
        window.location.href = '/docs/guides/getting-started/welcome';

    }, []);

    return (
        <></>
    );
}
