import Bar from '../components/bar';

export default function About() {
    return (
        <div>
            <Bar menus={[
                {title: 'home', url: '/'},
                {title: 'about', url: '/about'},
            ]}/>
            <h1>About App1</h1>
        </div>
    )
}