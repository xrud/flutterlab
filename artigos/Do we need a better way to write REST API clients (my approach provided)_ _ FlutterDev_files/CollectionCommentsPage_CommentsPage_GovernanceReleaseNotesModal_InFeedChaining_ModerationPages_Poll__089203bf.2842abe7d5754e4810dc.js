(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([["CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"],{"./src/lib/onFocusAndVisibilityChange/index.ts":function(e,t,i){"use strict";var s,n=i("./node_modules/brcast/dist/brcast.es.js"),o=i("./node_modules/lodash/findKey.js"),a=i.n(o);!function(e){e.Hidden="hidden",e.Visible="visible"}(s||(s={}));const r={hidden:"visibilitychange",webkitHidden:"webkitvisibilitychange",mozHidden:"mozvisibilitychange",msHidden:"msvisibilitychange"};let d=!1;const l=Object(n.a)({documentInFocus:!0});!function(){if(!d){const e=a()(r,(e,t)=>void 0!==document[t]);e&&document.addEventListener(r[e],()=>{l.setState({documentInFocus:document.visibilityState!==s.Hidden})}),d=!0}}(),t.a={subscribe:e=>{return l.subscribe(e)},unsubscribe:e=>{l.unsubscribe(e)}}},"./src/reddit/components/AdViewabilityMRC/index.tsx":function(e,t,i){"use strict";var s=i("./node_modules/lodash/isEqual.js"),n=i.n(s),o=i("./node_modules/react/index.js"),a=i.n(o),r=i("./node_modules/reselect/es/index.js"),d=i("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),l=i("./src/reddit/connectors/PostViewable/index.ts"),c=i("./src/reddit/constants/viewabilityEvents.ts"),h=i("./src/reddit/selectors/media.ts"),m=i("./src/reddit/selectors/video.ts");const u=.5,p=.8,b=1,g=2e3,w=15e3,v=[u,p,b],f=e=>"boolean"==typeof e.cumulative,x=Object(r.c)({buffering:(e,t)=>{let{post:i}=t;return Object(m.a)(e,{postId:i.id})},playing:(e,t)=>{let{post:i}=t;return Object(m.e)(e,{postId:i.id})},continuousViewingStartedAt:(e,t)=>{let{post:i}=t;return Object(m.c)(e,{postId:i.id})},videoDuration:(e,t)=>{let{post:i}=t;const s=Object(m.g)(e,{postId:i.id});if(s)return s.length},isAudible:e=>!Object(h.a)(e)&&!!Object(h.b)(e)}),y=Object(l.a)(x);class C extends o.Component{constructor(e){super(e),this.mrcVideoViewable={timer:null,event:c.a.MRCVideoViewableImpression,threshold:u,viewabilityMinimum:g,fired:!1,timeViewingInitialized:0,remainingTime:g,timeViewingInterrupted:0},this.videoGroupMViewable={timer:null,event:c.a.VideoGroupMViewable,threshold:void 0,viewabilityMinimum:g,fired:!1,timeViewingInitialized:0,remainingTime:g,timeViewingInterrupted:0,cumulative:!0,cumulativeElapsedTime:0},this.videoVendorFullyViewable50={timer:null,event:c.a.VideoVendorFullyViewable50,threshold:b,viewabilityMinimum:void 0,fired:!1,timeViewingInitialized:0,remainingTime:void 0,timeViewingInterrupted:0,cumulative:!0,cumulativeElapsedTime:0},this.handleViewabilityChange=e=>{this.checkViewabilityByType(e)},this.checkViewabilityByType=e=>{n()(this.state.event,e)||this.setState({event:e}),!this.props.buffering&&this.props.playing&&(this.checkViewability(e,this.mrcVideoViewable),this.checkViewability(e,this.videoVendorFullyViewable50),this.props.isAudible&&this.checkViewability(e,this.videoGroupMViewable))},this.state={event:null,currentContinuousViewingStartedAt:this.props.continuousViewingStartedAt}}componentDidUpdate(){this.state.currentContinuousViewingStartedAt===this.props.continuousViewingStartedAt?(!this.props.buffering&&this.props.playing&&this.props.isAudible||this.pauseCumulativeStats(this.videoGroupMViewable),this.props.buffering||!this.props.playing?(this.pauseViewableStats(this.mrcVideoViewable),this.pauseCumulativeStats(this.videoVendorFullyViewable50)):this.checkViewabilityByType(this.state.event)):this.resetTimers()}resetTimers(){this.resetTimer(this.mrcVideoViewable),this.setState({currentContinuousViewingStartedAt:this.props.continuousViewingStartedAt})}resetTimer(e){this.clearTimer(e.timer),e.timer=null,e.timeViewingInitialized=0,void 0!==e.viewabilityMinimum&&(e.remainingTime=e.viewabilityMinimum)}pauseViewableStats(e){let t;if(!e.timer||e.fired||void 0===e.viewabilityMinimum)return;e.timeViewingInterrupted=Date.now();const i=e.timeViewingInterrupted-e.timeViewingInitialized;t=e.viewabilityMinimum-i,e.remainingTime=t>0?t:0,this.clearTimer(e.timer)}pauseCumulativeStats(e){let t;e.timer&&!e.fired&&void 0!==e.viewabilityMinimum&&(e.timeViewingInterrupted=Date.now(),e.cumulativeElapsedTime+=e.timeViewingInterrupted-e.timeViewingInitialized,t=e.viewabilityMinimum-e.cumulativeElapsedTime,e.remainingTime=t>0?t:0,this.clearTimer(e.timer))}isAdequatelyInView(e,t){return!!e&&e.isIntersecting&&e.intersectionRatio>=t}setViewabilityMinimum(e){this.props.videoDuration?e.viewabilityMinimum=Math.min(.5*this.props.videoDuration,w):e.viewabilityMinimum=w,e.remainingTime=e.viewabilityMinimum}checkViewability(e,t){if(f(t)&&void 0===t.remainingTime&&this.setViewabilityMinimum(t),!t.threshold&&e&&this.props.videoDuration){const{height:i,width:s}=e.boundingClientRect;t.threshold=s*i<3e5?b:p,t.viewabilityMinimum=.5*this.props.videoDuration}if(t.threshold){if(this.isAdequatelyInView(e,t.threshold)&&!t.fired){const e=this.getLengthForTimer(t);return e>0?this.initTimer(t,e):this.fireStat(t),void(t.timeViewingInitialized=Date.now())}f(t)&&t.cumulative&&this.pauseCumulativeStats(t),this.clearTimer(t.timer)}}clearTimer(e){e&&clearTimeout(e)}getLengthForTimer(e){return void 0!==e.remainingTime?e.remainingTime:e.viewabilityMinimum||0}fireStat(e){setTimeout(()=>this.props.onPostViewable(this.props.post,e.event),0),e.fired=!0}initTimer(e,t){this.clearTimer(e.timer),e.timer=window.setTimeout(()=>{this.fireStat(e)},t)}render(){return a.a.createElement(d.a,{threshold:v,onChange:this.handleViewabilityChange},this.props.children)}}t.a=y(C)},"./src/reddit/components/Governance/Proposal/async.ts":function(e,t,i){"use strict";var s=i("./node_modules/@loadable/component/dist/loadable.esm.js");t.a=Object(s.a)({resolved:{},chunkName:()=>"reddit-components-Governance-Proposal",isReady(e){const t=this.resolve(e);return!1!==this.resolved[t]&&!!i.m[t]},importAsync:()=>i.e("reddit-components-Governance-Proposal").then(i.bind(null,"./src/reddit/components/Governance/Proposal/index.tsx")),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){const t=this.resolve(e);return i(t)},resolve(){return"./src/reddit/components/Governance/Proposal/index.tsx"}})},"./src/reddit/components/Media/RichTextContainer/index.m.less":function(e,t,i){e.exports={richTextContainer:"Chtkt3BCZQruf0LtmFg2c",richTextContainerTitleOnly:"_2XNPI46MXRfDdsSoDqaksI",richTextContainerFull:"_3xX726aBn29LDbsDtzr_6E",placeholder:"_1aLU7RPNLdvfcbaNdcN11x",placeholderParagraph:"Owi9iYzjyVpDq_0YbCdJY"}},"./src/reddit/components/Media/RichTextContainer/index.tsx":function(e,t,i){"use strict";i("./node_modules/core-js/modules/es6.symbol.js");var s=i("./node_modules/react/index.js"),n=i.n(s),o=i("./src/lib/classNames/index.ts"),a=i("./src/reddit/constants/componentSizes.ts"),r=i("./src/reddit/models/Media/index.ts"),d=i("./node_modules/react-redux/es/index.js"),l=i("./src/reddit/actions/post.ts"),c=i("./src/reddit/helpers/styles/mixins/loading.ts"),h=i("./src/reddit/components/Media/RichTextContainer/index.m.less"),m=i.n(h);class u extends n.a.Component{componentDidMount(){this.loadRichTextContentIfNeeded()}loadRichTextContentIfNeeded(){this.props.canLoadContent&&this.props.isExpando&&this.props.onLoadRichTextContentIfNeeded(this.props.postId)}render(){const e=Object(c.a)({isLoading:!0});return n.a.createElement("div",{className:m.a.placeholder},[1,2,3].map(t=>n.a.createElement("div",{key:t,className:m.a.placeholderParagraph},n.a.createElement("div",{className:e}),n.a.createElement("div",{className:e}),n.a.createElement("div",{className:e}))))}}var p=Object(d.b)(null,e=>({onLoadRichTextContentIfNeeded:t=>e(Object(l.y)(t))}))(u);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e}).apply(this,arguments)}var g=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i};t.a=e=>{var{canLoadContent:t,children:i,className:s,isCommentsPage:d,isMediumHeight:l,isRichTextTruncated:c,isExpando:h,isTitleOnly:u,postId:w,showFull:v}=e,f=g(e,["canLoadContent","children","className","isCommentsPage","isMediumHeight","isRichTextTruncated","isExpando","isTitleOnly","postId","showFull"]);const x={[m.a.richTextContainerFull]:v,[m.a.richTextContainerTitleOnly]:u&&!v,[m.a.richTextContainer]:!v&&!u},y={};v||(y.maxHeight="".concat(u?r.l:l?r.k:r.j,"px")),d&&(y.maxWidth="".concat(a.d,"px"));const C=c&&v;return n.a.createElement("div",b({className:Object(o.a)(x,s),style:y},f),i,C&&n.a.createElement(p,{canLoadContent:!!t,isExpando:h,postId:w}))}},"./src/reddit/components/Media/TwitterEmbed/index.m.less":function(e,t,i){e.exports={tweetPlaceholder:"q0jsD_ZcQRuuUQzXawr8J",tweetEmbedBox:"_3pYTJO5FjsoQWRUsIFQASN",isInvisible:"_3xICr9rbunMOudN40P1GgI",tweetDeleted:"sIgL7k1Lz6YLL146KNk8k",seeMore:"_2f5uYHvlfzs2DngQsiCdvB"}},"./src/reddit/components/Media/TwitterEmbed/index.tsx":function(e,t,i){"use strict";i.d(t,"a",(function(){return x}));var s=i("./node_modules/react/index.js"),n=i.n(s),o=i("./src/lib/classNames/index.ts"),a=i("./src/lib/intersectionObserver/index.ts"),r=i("./src/reddit/components/Media/constants.ts"),d=i("./src/reddit/components/Media/EmbedBox/index.tsx"),l=i("./src/reddit/components/Media/MediaContainer/index.tsx"),c=i("./src/reddit/helpers/styles/mixins/loading.ts"),h=i("./src/reddit/i18n/components.tsx"),m=i("./src/reddit/i18n/utils.ts"),u=i("./src/reddit/models/Media/index.ts"),p=i("./src/reddit/components/Media/TwitterEmbed/index.m.less"),b=i.n(p);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e}).apply(this,arguments)}const w=350,v=100,f=300;class x extends n.a.Component{constructor(){super(...arguments),this.state={isFullyLoaded:!1},this.iframe=null,this.onWindowMessage=e=>{!this.state.isFullyLoaded&&this.iframe&&this.iframe.contentWindow===e.source&&"tweet-measured"===e.data.action&&this.setState({isFullyLoaded:!0})},this.embedBoxChildRef=e=>{this.iframe=e,e&&a.a(e,(t,i)=>{e&&e.contentWindow&&!this.props.media.height&&i&&e.contentWindow.postMessage("twitter-measure-requested",r.a)}),this.props.embedBoxChildRef(e)}}componentDidMount(){window.addEventListener("message",this.onWindowMessage)}componentWillUnmount(){this.iframe&&a.b(this.iframe),window.removeEventListener("message",this.onWindowMessage)}render(){const{canLoadContent:e,media:t,mediaContainerProps:i,onIframeLoaded:s,source:a,title:r}=this.props,{isFullyLoaded:p}=this.state,x=i.height||(t.isDeleted?v:f);return n.a.createElement(l.a,g({},i,{alwaysWrapMedia:!0,height:x,showFull:!i.isListing,width:w}),e&&n.a.createElement(n.a.Fragment,null,(!i.height||!p)&&(t.isDeleted?n.a.createElement("p",{className:b.a.tweetDeleted},Object(m.b)("This Tweet has been deleted.")):n.a.createElement("div",{className:Object(o.a)(Object(c.a)({isLoading:!0}),b.a.tweetPlaceholder)})),n.a.createElement(d.a,{childRef:this.embedBoxChildRef,className:Object(o.a)(b.a.tweetEmbedBox,{[b.a.isInvisible]:!i.height||!p}),height:x,isListing:i.isListing,isResponsive:!0,maxHeight:i.isListing?u.i:null,onLoad:s,showCentered:i.showCentered,showFull:!0,source:a,title:r,width:w}),i.isListing&&x>u.i&&n.a.createElement("div",{className:b.a.seeMore},n.a.createElement(h.a,null,"see full tweet"))))}}},"./src/reddit/components/Media/constants.ts":function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));const s="https://www.redditmedia.com"},"./src/reddit/components/Media/getResolution.ts":function(e,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return r}));var s=i("./src/reddit/models/Media/index.ts");const n=(e,t,i,s)=>{const n=e/t,o=i/s;return Math.abs(n-o)<.03},o=(e,t)=>{for(let i=0;i<t.length;i++){const s=t[i];if(s.width>=e)return s}},a=(e,t,i)=>{for(let o=0;o<i.length;o++){const a=i[o];if(a.width>=s.e/2&&n(e,t,a.height,a.width))return a}},r=e=>{for(let t=0;t<e.length;t++){const i=e[t];if(i.height>=s.e||i.width>=s.f)return i}}},"./src/reddit/components/Media/index.m.less":function(e,t,i){e.exports={hiddenLink:"_3dhFVFchWAAFXfLFTa94n9",displayNone:"_1Q2mF3u7v9hBVu_4bkC7R4"}},"./src/reddit/components/Media/index.tsx":function(e,t,i){"use strict";var s=i("./node_modules/core-js/modules/web.dom.iterable.js"),n=i.n(s),o=i("./node_modules/@loadable/component/dist/loadable.esm.js"),a=i("./node_modules/lodash/debounce.js"),r=i.n(a),d=i("./node_modules/react/index.js"),l=i.n(d),c=i("./node_modules/react-redux/es/index.js"),h=i("./node_modules/reselect/es/index.js"),m=i("./src/lib/CSSVariableProvider/withTheme.tsx"),u=i("./src/lib/env/index.ts"),p=i("./src/lib/isUrl/index.ts"),b=i("./src/lib/objectSelector/index.ts"),g=i("./src/lib/onFocusAndVisibilityChange/index.ts"),w=i("./src/lib/sentry/index.ts"),v=i("./src/reddit/components/AdViewabilityMRC/index.tsx"),f=i("./src/reddit/components/Governance/Proposal/async.ts"),x=i("./src/reddit/components/HTML5StreamPlayer/index.tsx"),y=i("./src/reddit/components/Media/constants.ts"),C=i("./src/reddit/components/Media/EmbedBox/index.tsx"),E=i("./src/reddit/components/Media/ImageBox/index.tsx"),M=i("./src/reddit/components/Media/MediaContainer/index.tsx"),S=i("./src/reddit/components/Media/RichTextContainer/index.tsx"),V=i("./src/reddit/components/Media/TwitterEmbed/index.tsx"),I=i("./src/reddit/components/Media/VideoBox/index.tsx"),O=i("./src/reddit/components/PlayButton/index.tsx"),T=i("./src/reddit/components/RawHTMLDisplay/Media.tsx"),j=i("./src/reddit/components/RichTextJson/index.tsx"),L=i("./src/reddit/constants/componentSizes.ts"),P=i("./src/reddit/constants/screenWidths.ts"),N=i("./src/reddit/contexts/PageLayer/index.tsx"),D=i("./src/reddit/helpers/canPreviewSelfText/index.ts"),F=i("./src/reddit/helpers/getRichTextContent/index.ts"),R=i("./src/reddit/helpers/name/index.ts"),W=i("./src/reddit/helpers/postHasSelfText/index.ts"),B=i("./src/reddit/helpers/stripMetaLinks/fromRawHtml.ts"),A=i("./src/reddit/helpers/stripMetaLinks/fromRTJ.ts"),_=i("./src/reddit/models/Media/index.ts"),k=i("./src/reddit/selectors/experiments/postSeo.ts"),H=i("./src/reddit/selectors/postCreations.ts"),G=i("./src/reddit/selectors/posts.ts"),U=i("./src/reddit/components/Media/getResolution.ts"),z=i("./src/reddit/components/Media/index.m.less"),q=i.n(z);function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e}).apply(this,arguments)}const Q=Object(o.a)({resolved:{},chunkName:()=>"LiveVideoPlayer",isReady(e){const t=this.resolve(e);return!1!==this.resolved[t]&&!!i.m[t]},importAsync:()=>Promise.all([i.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"),i.e("LiveVideoPlayer~PublicAccessNetwork"),i.e("LiveVideoPlayer")]).then(i.bind(null,"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.tsx")),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){const t=this.resolve(e);return i(t)},resolve(){return"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.tsx"}},{ssr:!1}),X=1200,Y=75,K="player.js",Z=L.r+L.q,$=e=>e.isVisible?e.children:l.a.createElement("div",{className:q.a.displayNone},e.children),ee=new Set([_.n.EMBED,_.n.GIFVIDEO,_.n.LIVEVIDEO,_.n.VIDEO]),te=e=>!!e.media&&ee.has(e.media.type),ie=new Set([_.n.EMBED,_.n.GIFVIDEO,_.n.IMAGE,_.n.LIVEVIDEO,_.n.VIDEO]),se=e=>{let{post:t}=e;return!!t.media&&ie.has(t.media.type)},ne=Object(N.t)(),oe=Object(h.c)({isPostImageAltTextVariant:k.b,subredditOrProfileDisplayText:(e,t)=>{let{post:i}=t;const s=Object(G.Z)(e,i);return s&&s.displayText||i&&i.author&&Object(R.c)(i.author)},subredditOrProfile:(e,t)=>{let{post:i}=t;return Object(G.Z)(e,{postId:i.id})},isEditing:(e,t)=>{let{post:i}=t;return Object(H.C)(e,{postId:i.id})}}),ae=Object(c.b)(oe),re=Object(b.b)(e=>({renderingObjectInfo:e.post,pageLayer:e.pageLayer}));class de extends l.a.Component{constructor(e){super(e),this.pauseContent=()=>{this.shouldFocusContentDebouncer(!1)},this.stopContent=()=>{const{media:e}=this.props.post;if(e&&_.d.has(e.type)){if(this.iframe){const t=e.type===_.n.EMBED?e.provider:null;this.pauseEmbed(this.iframe,t)}this.setState(e=>e.shouldStop?null:{shouldStop:!0})}},this.handleVisibilityChange=e=>{const{shouldPause:t}=this.state,{autoplayPref:i}=this.props;this.iframe&&(t||!i&&e.documentInFocus||this.toggleEmbedAutoplay(this.iframe,!e.documentInFocus)),this.setState({forcePause:!e.documentInFocus})},this.focusContent=()=>{this.shouldFocusContentDebouncer(!0)},this.loadContent=()=>{this.setState(e=>e.canLoadContent?null:{canLoadContent:!0})},this.unmountContent=()=>{},this.contentIsHeavyToMount=()=>{const{media:e}=this.props.post;return!!e&&_.d.has(e.type)},this.shouldFocusContentDebouncer=r()(e=>{const{media:t}=this.props.post,{autoplayPref:i}=this.props;if(t&&_.d.has(t.type)){if(this.iframe){const s=t.type===_.n.EMBED?t.provider:null;s&&!_.q.has(s)?!i&&e||this.toggleEmbedAutoplay(this.iframe,!e):e||this.pauseEmbed(this.iframe,s)}e?this.setState(e=>e.shouldPause||!e.canLoadContent?{canLoadContent:!0,shouldPause:!1,shouldStop:!1}:null):this.setState(e=>e.shouldPause?null:{shouldPause:!0})}},250,{leading:!0}),this.toggleEmbedAutoplay=(e,t)=>{if(e.contentWindow){const i=t?_.g.Pause:_.g.Play;e.contentWindow.postMessage({context:K,method:i},y.a),e.contentWindow.postMessage({context:K,method:_.g.Mute},y.a)}},this.pauseEmbed=(e,t)=>{e.contentWindow&&(t===_.t.YouTube?e.contentWindow.postMessage(JSON.stringify({event:"command",func:_.x.Pause}),y.a):e.contentWindow.postMessage({context:K,method:_.g.Pause},y.a))},this.onIframeLoaded=()=>{const{media:e}=this.props.post,{autoplayPref:t}=this.props,i=e&&e.type===_.n.EMBED?e.provider:null;if(this.iframe&&i&&!_.q.has(i)){const{shouldPause:e}=this.state;(t||e)&&this.toggleEmbedAutoplay(this.iframe,e)}},this.onImageBoxClick=e=>{this.props.isListing||!this.shouldBlur()||this.state.isRevealed||(this.setState({isRevealed:!0}),e.preventDefault(),e.stopPropagation())},this.storeChildRef=e=>{this.iframe=e},this.updateDimensions=()=>{this.setState({viewportHeight:window.innerHeight,viewportWidth:window.innerWidth})},this.isSpoiler=()=>this.props.post.isSpoiler||!(!this.props.crosspost||!this.props.crosspost.isSpoiler),this.isNSFW=()=>this.props.post.isNSFW||!(!this.props.crosspost||!this.props.crosspost.isNSFW),this.state={canLoadContent:e.shouldLoad||!1,forcePause:!1,isRevealed:!1,shouldPause:void 0===e.shouldPause||e.shouldPause,shouldStop:void 0===e.shouldStop||e.shouldStop,viewportHeight:_.e,viewportWidth:_.f}}UNSAFE_componentWillMount(){"undefined"!=typeof window&&(this.updateDimensions(),window.addEventListener("resize",this.updateDimensions))}componentDidMount(){te(this.props.post)&&(this.visibilityChangeSubscriptionId=g.a.subscribe(e=>{this.handleVisibilityChange(e)})),this.props.scrollerItemRef&&se(this.props)&&this.props.scrollerItemRef(this,this.state.canLoadContent)}componentWillUnmount(){this.visibilityChangeSubscriptionId&&g.a.unsubscribe(this.visibilityChangeSubscriptionId),this.props.scrollerItemRef&&se(this.props)&&this.props.scrollerItemRef(void 0),window.removeEventListener("resize",this.updateDimensions)}UNSAFE_componentWillReceiveProps(e){!this.state.canLoadContent&&e.shouldLoad&&this.setState({canLoadContent:!0}),void 0!==e.shouldPause&&e.shouldPause!==this.props.shouldPause&&this.shouldFocusContentDebouncer(!e.shouldPause)}getVideoExpandoMaxDimensions(){let e,t=Math.max(_.i,this.state.viewportHeight),i=Math.min(X,16*t/9);i===X&&(t=9*X/16),e=this.state.viewportWidth>=P.c?this.state.viewportWidth<L.l?this.state.viewportWidth-Z-2*Y:this.state.viewportWidth-Z-L.e-2*Y:this.state.viewportWidth-2*Y;const s=this.state.viewportHeight-2*Y;if(i>e){t*=e/i,i=e}else if(t>s){const e=s/t;t=s,i*=e}return{maxVideoHeight:t,maxVideoWidth:i}}getVideoMaxDimensions(e,t){let i=_.i,s=_.m;return e.isExpando?this.getVideoExpandoMaxDimensions():(e.isPromotedTrend&&(i=_.r,s=_.s),{maxVideoHeight:i,maxVideoWidth:s})}getMediaInfo(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state;const{availableWidth:i,post:s}=e;if(Object(_.C)(s.media))return{source:s.media.scrubberThumbSource,width:this.state.viewportWidth-2*Y,height:this.state.viewportHeight-2*Y};const n=s.media&&s.media.obfuscated||"";let o=s.media&&!Object(_.F)(s.media)?s.media.content:"",[a,r]=!s.media||Object(_.D)(s.media)||Object(_.E)(s.media)?[0,0]:[s.media.height,s.media.width];if(i&&s.media&&(s.media.type===_.n.IMAGE||s.media.type===_.n.GIFVIDEO)){const e=U.b(i,s.media.resolutions);e&&(o=e.url,r=e.width,a=e.height)}else if(s&&s.media&&(!e.isListing||e.isExpando)&&(s.media.type===_.n.IMAGE||s.media.type===_.n.GIFVIDEO)){let e;(e=Object(E.b)(s.media.height,s.media.width)&&Object(E.c)(s.media.height)?U.c(s.media.height,s.media.width,s.media.resolutions):U.a(s.media.resolutions))&&(o=e.url,r=e.width,a=e.height)}if(e.isExpando)if(r>t.viewportWidth){a*=t.viewportWidth/r,r=t.viewportWidth}else if(a>t.viewportHeight){const e=t.viewportHeight/a;a=t.viewportHeight,r*=e}const{maxVideoHeight:d,maxVideoWidth:l}=this.getVideoMaxDimensions(e,t);if(s.media&&s.media.type===_.n.VIDEO){const t=a/r;e.isExpando?(a=d,r=l):t>_.c?(a=d,r=Math.min(Math.max(d/t,_.p),l)):(a=Math.min(Math.max(l*t,_.o),d),r=l)}s.media&&s.media.type===_.n.EMBED&&e.isExpando&&s.media.provider!==_.t.Twitter&&(a=d,r=l);let c=!1;if(e.isMiniCard){const e=a/r;c=Math.abs(e-_.c)>.01}return{source:o,obfuscated:n,width:r,height:a,needsBackgroundBlur:c}}shouldBlur(){const{isExpando:e,isOverlay:t,theme:i}=this.props,s=this.isNSFW(),n=this.isSpoiler();return!(e||this.state.isRevealed||t)&&(s&&!i.subredditContext.shouldShowNSFWContent||n)}render(){const{className:e,crosspost:t,flairStyleTemplate:i,forceAspectRatio:s,isCommentsPage:n,isExpando:o,isListing:a,isMediumHeight:r,isNotCardView:d,isPostImageAltTextVariant:c,isTitleOnly:h,post:m,showCentered:b,showFull:g=!1,subredditOrProfileDisplayText:y}=this.props,{canLoadContent:L,forcePause:P,shouldPause:N,shouldStop:R,viewportWidth:k}=this.state;if(!m.media)return null;const H=P||N,G=R,{source:U,obfuscated:z,height:X,width:K,needsBackgroundBlur:Z}=this.getMediaInfo(this.props,this.state),ee={showCentered:b,isListing:a,showFull:g,height:X,width:K},te=Object.assign({},ee,{className:e,forceAspectRatio:s,viewportWidth:k}),ie=this.shouldBlur(),se=!(!m.isSponsored||!m.source);if(z&&ie)return l.a.createElement(M.a,J({},te,{blurSrc:z}),l.a.createElement($,{isVisible:L},l.a.createElement(E.a,J({},ee,{className:this.props.imageBoxClassName,contentImageClassName:this.props.imageBoxContentImageClassName,imageClassName:this.props.imageBoxClassName,isListing:a,isNSFW:this.isNSFW(),isSpoiler:this.isSpoiler(),isVideoThumbnail:!!m.media&&m.media.type===_.n.VIDEO,onClick:this.onImageBoxClick,postId:m.id,shouldBlur:ie,source:z,outboundUrl:se&&m.source.outboundUrl||void 0,originalSource:U}))));if(!m.media)return null;switch(m.media.type){case _.n.RTJSON:const s=Object(F.a)(m,null);if(null===s)return;return g||Object(D.a)(m)?l.a.createElement(l.a.Fragment,null,l.a.createElement(S.a,{canLoadContent:L,className:e,"data-click-id":"text",isCommentsPage:n,isExpando:o,isMediumHeight:r,isRichTextTruncated:m.media.isRichtextPreview,isTitleOnly:h,postId:m.id,showFull:g},l.a.createElement(j.a,{flairStyleTemplate:i,content:m.isMeta?Object(A.a)(s,m.id):s,mediaMetadata:m.media.mediaMetadata,postId:m.id,rtJsonElementProps:re(this.props),renderMediaAsLinks:a})),l.a.createElement(f.a,{postId:m.id,isCommentsPage:!!n})):null;case _.n.TEXT:if(Object(W.a)(m)){const t="Text post should not include body content";return w.c.withScope(e=>{e.setExtra("info",{post:m,isListing:a,isCommentsPage:n}),w.c.captureMessage(t)}),Object(u.a)()&&console.log("".concat(m.id,": ").concat(t)),l.a.createElement(S.a,{postId:m.id,className:e,"data-click-id":"text",isCommentsPage:n,showFull:g},l.a.createElement(T.a,{flairStyleTemplate:i,html:m.isMeta?Object(B.a)(m.media.content,m.id,q.a.hiddenLink):m.media.content}))}return null;case _.n.EMBED:return this.props.isMiniCard&&m.preview&&m.preview.url?l.a.createElement(M.a,J({},te,{alwaysWrapMedia:!0}),l.a.createElement($,{isVisible:L},l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,J({},ee,{className:this.props.imageBoxClassName,contentImageClassName:this.props.imageBoxContentImageClassName,imageClassName:this.props.imageBoxClassName,isExpando:o,isListing:a,isNSFW:this.isNSFW(),isCrosspost:!!t,isSpoiler:this.isSpoiler(),postId:m.id,shouldBlur:ie,source:m.preview.url,originalSource:m.preview.url})),l.a.createElement(O.a,null)))):_.h.has(m.media.provider)?m.media.provider===_.t.Twitter?l.a.createElement(V.a,{canLoadContent:L,embedBoxChildRef:this.storeChildRef,media:m.media,mediaContainerProps:te,onIframeLoaded:this.onIframeLoaded,source:U,title:m.title}):l.a.createElement(M.a,J({},te,{alwaysWrapMedia:!0,height:o?X:_.i,width:o?K:_.i*(16/9)}),L&&l.a.createElement(C.a,{childRef:this.storeChildRef,height:o?X:_.i,width:o?K:void 0,isListing:a,isResponsive:!0,onLoad:this.onIframeLoaded,showCentered:b,showFull:g,source:U,title:m.title})):l.a.createElement(M.a,J({},te,{alwaysWrapMedia:!0}),L&&l.a.createElement(C.a,J({},ee,{isResponsive:o||m.media.provider===_.t.IFrameEmbed,title:m.title,childRef:this.storeChildRef,onLoad:this.onIframeLoaded,source:U,fullWidth:m.media.provider===_.t.IFrameEmbed})));case _.n.GIFVIDEO:{let e=X,t=K;return e>_.i&&(t=K/X*(e=_.i)),l.a.createElement(M.a,J({},te,{blurSrc:Z?m.media.gifBackgroundImage:void 0}),l.a.createElement($,{isVisible:L},l.a.createElement(I.a,J({},ee,{isNotCardView:d,height:o?void 0:e,width:o?void 0:t,postId:m.id,shouldLoad:!0,shouldPause:H,source:U,originalSource:m.media.content}))))}case _.n.VIDEO:{const e=m.media.posterUrl||m.preview&&m.preview.url;if(this.props.isMiniCard&&e)return l.a.createElement(M.a,J({},te,{alwaysWrapMedia:!0}),l.a.createElement($,{isVisible:L},l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,J({},ee,{className:this.props.imageBoxClassName,contentImageClassName:this.props.imageBoxContentImageClassName,imageClassName:this.props.imageBoxClassName,isExpando:o,isListing:a,isNSFW:this.isNSFW(),isCrosspost:!!t,isSpoiler:this.isSpoiler(),postId:m.id,shouldBlur:ie,source:e,originalSource:e})),l.a.createElement(O.a,null))));const i=l.a.createElement(M.a,J({},te,{alwaysWrapMedia:!0,isVideo:!0}),L&&l.a.createElement(x.b,{autoPlay:"boolean"==typeof N?!N:void 0,isExpando:o,shouldLoad:!0,shouldPause:H,shouldStop:G,hlsSource:m.media.hlsUrl,mpegDashSource:m.media.dashUrl,isGif:m.media.isGif,scrubberThumbSource:m.media.scrubberThumbSource,postId:m.id,callToActionSource:m.source||void 0,callToActionText:m.callToAction,isListing:a,posterUrl:m.media.posterUrl}));return m.isSponsored?l.a.createElement(v.a,{post:m},i):i}case _.n.LIVEVIDEO:return l.a.createElement($,{isVisible:L},l.a.createElement(Q,{canLoad:L,postId:m.id,shouldPause:H,url:m.media.hlsUrl}));case _.n.IMAGE:const P=this.state.viewportHeight-2*Y,R=this.state.viewportWidth-2*Y;let k,z=U;return this.props.isMiniCard&&!this.props.isMiniCardHQPreviews&&(m.thumbnail&&Object(p.a)(m.thumbnail.url)?z=m.thumbnail.url:m.preview&&Object(p.a)(m.preview.url)&&(z=m.preview.url)),c&&(k=y?"".concat(y," - ").concat(m.title):m.title),l.a.createElement(M.a,J({},te,{blurSrc:Z?z:void 0,isExpando:!!o}),l.a.createElement($,{isVisible:L},l.a.createElement(E.a,J({},ee,{className:this.props.imageBoxClassName,contentImageClassName:this.props.imageBoxContentImageClassName,imageClassName:this.props.imageBoxClassName,isExpando:o,isListing:a,isNSFW:this.isNSFW(),isCrosspost:!!t,isSpoiler:this.isSpoiler(),maxHeight:o?P:void 0,maxWidth:o?R:void 0,postId:m.id,shouldBlur:ie,source:z,outboundUrl:se&&m.source.outboundUrl||void 0,originalSource:m.media.content,altText:k}))));default:return null}}}t.a=ne(ae(Object(m.a)(de)))},"./src/reddit/components/RawHTMLDisplay/Media.tsx":function(e,t,i){"use strict";i("./node_modules/core-js/modules/es6.symbol.js");var s=i("./node_modules/react/index.js"),n=i.n(s),o=i("./src/lib/CSSVariableProvider/withTheme.tsx"),a=i("./src/reddit/helpers/styles/postBackgroundColor.ts"),r=i("./src/reddit/helpers/styles/smartTextColor.ts"),d=i("./src/reddit/components/RawHTMLDisplay/index.tsx");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e}).apply(this,arguments)}var c=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i};t.a=Object(o.a)(e=>{var{flairStyleTemplate:t}=e,i=c(e,["flairStyleTemplate"]);return n.a.createElement(d.a,l({style:{color:Object(r.a)(Object(a.a)(Object.assign({flairStyleTemplate:t},i)))}},i))})},"./src/reddit/helpers/canPreviewSelfText/index.ts":function(e,t,i){"use strict";var s=i("./src/reddit/helpers/postHasSelfText/index.ts");t.a=e=>(Object(s.a)(e)||!!e.pollData)&&!e.isSpoiler&&!e.isNSFW},"./src/reddit/helpers/postHasSelfText/index.ts":function(e,t,i){"use strict";var s=i("./src/reddit/models/Media/index.ts"),n=i("./src/reddit/models/RichTextJson/index.ts");t.a=e=>{const t=e&&e.media;return!!t&&(t.type===s.n.TEXT&&!!t.content||t.type===s.n.RTJSON&&!Object(n.F)(t.richtextContent))}},"./src/reddit/helpers/stripMetaLinks/fromRTJ.ts":function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var s=i("./src/lib/redditId/index.ts");function n(e,t){const i=function e(t,i){let s=!1;let n=[];try{for(const o of t)if("link"===o.e&&o.u&&o.u.includes("https://www.reddit.com/poll/".concat(i)))s=!0;else if(o.c&&"string"!=typeof o.c){const t=e(o.c,i);t.found?(s=!0,("par"!==o.e||t.updated.length)&&n.push(Object.assign({},o,{c:t.updated}))):n.push(o)}else n.push(o)}catch(o){s=!1,n=[]}return{found:s,updated:s?n:t}}(e.document,Object(s.c)(t));return i.found?{document:i.updated}:e}},"./src/reddit/helpers/stripMetaLinks/fromRawHtml.ts":function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));i("./node_modules/core-js/modules/es6.regexp.replace.js");var s=i("./src/lib/redditId/index.ts");function n(e,t,i){return e.replace('href="https://www.reddit.com/poll/'.concat(Object(s.c)(t)),'class="'.concat(i,'" href="https://www.reddit.com/poll/').concat(Object(s.c)(t)))}}}]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf.2842abe7d5754e4810dc.js.map