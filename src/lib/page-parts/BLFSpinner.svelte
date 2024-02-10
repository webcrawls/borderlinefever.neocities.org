<div id="container">
    <div id="circle">
        <img src="/circle.svg"/>
    </div>
</div>

<style>
    #container {
        padding: 2px;
        width: max(17.5vw, 10rem);
        height: max(17.5vw, 10rem);
        position: absolute;
        bottom: 1rem;
        right: 1rem;
    }

    #circle {
        position: relative;
        width: 100%;
        padding-bottom: 100%;
        overflow: hidden;
    }

    #circle text {
        font-weight: bold;
    }

    #circle img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        -webkit-animation-name: rotate;
        -moz-animation-name: rotate;
        -ms-animation-name: rotate;
        -o-animation-name: rotate;
        animation-name: rotate;
        -webkit-animation-duration: 15s;
        -moz-animation-duration: 15s;
        -ms-animation-duration: 15s;
        -o-animation-duration: 15s;
        animation-duration: 15s;
        -webkit-animation-iteration-count: infinite;
        -moz-animation-iteration-count: infinite;
        -ms-animation-iteration-count: infinite;
        -o-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-timing-function: linear;
        -moz-animation-timing-function: linear;
        -ms-animation-timing-function: linear;
        -o-animation-timing-function: linear;
        animation-timing-function: linear;

    }

    @-webkit-keyframes rotate {
        from {
            -webkit-transform: rotate(360deg);
        }
        to {
            -webkit-transform: rotate(0);
        }
    }

    @-moz-keyframes rotate {
        from {
            -moz-transform: rotate(360deg);
        }
        to {
            -moz-transform: rotate(0);
        }
    }

    @-ms-keyframes rotate {
        from {
            -ms-transform: rotate(360deg);
        }
        to {
            -ms-transform: rotate(0);
        }
    }

    @-o-keyframes rotate {
        from {
            -o-transform: rotate(360deg);
        }
        to {
            -o-transform: rotate(0);
        }
    }

    @keyframes rotate {
        from {
            transform: rotate(360deg);
        }
        to {
            transform: rotate(0);
        }
    }
</style>