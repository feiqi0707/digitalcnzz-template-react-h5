import React from 'react';
import style from './Welcome.less';
import { connect } from 'dva';

interface IWelcomeProps {}

interface IWelcomeState {}
@connect(({ globalModel }) => ({
    globalModel
}))
class WelcomeComponent extends React.Component<IWelcomeProps, IWelcomeState> {
    constructor(props: IWelcomeProps, context?: any) {
        super(props, context);
    }

    public render(): React.ReactNode {
        return (
            <div className={style.welcomeContent}>
                <h1>Welcome Page</h1>
            </div>
        );
    }
}

export default WelcomeComponent;
