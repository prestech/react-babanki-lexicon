import * as React from 'react';
import Svg, {
  Defs,
  ClipPath,
  Path,
  Mask,
  G,
  RadialGradient,
  Stop,
} from 'react-native-svg';

function SvgNecklace(props) {
  return (
    <Svg viewBox="0 0 50 50" {...props}>
      <Defs>
        <ClipPath id="necklace_svg__X">
          <Path d="M29.789 30.488a1.818 1.818 0 00-.711-1.265 1.82 1.82 0 00-1.398-.383 1.796 1.796 0 00-1.242.707c-.321.41-.446.875-.383 1.398a1.8 1.8 0 00.707 1.243c.406.32.867.449 1.375.386a1.818 1.818 0 001.265-.711c.321-.406.45-.867.387-1.375z" />
        </ClipPath>
        <ClipPath id="necklace_svg__a">
          <Path d="M-.63-6.953h9.545V4.412H-.63V-6.953z" />
        </ClipPath>
        <ClipPath id="necklace_svg__aa">
          <Path d="M26.738 29.824a.276.276 0 000 .192c.043.109.16.14.352.101.23-.058.426-.172.586-.336.156-.164.172-.293.047-.39-.11-.102-.285-.094-.528.015-.23.11-.383.246-.457.418z" />
        </ClipPath>
        <ClipPath id="necklace_svg__c">
          <Path d="M-2169.3-3887.3h5.568v6.524h-5.568v-6.524z" />
        </ClipPath>
        <ClipPath id="necklace_svg__ad">
          <Path d="M33.117 32.418c.321-.41.449-.875.387-1.398a1.818 1.818 0 00-.707-1.243 1.814 1.814 0 00-1.399-.382 1.791 1.791 0 00-1.242.703c-.32.41-.449.867-.386 1.375.062.523.296.945.707 1.265.41.321.867.453 1.375.391a1.822 1.822 0 001.265-.711z" />
        </ClipPath>
        <ClipPath id="necklace_svg__e">
          <Path d="M143.67 354.08h11.62v11.62h-11.62v-11.62z" />
        </ClipPath>
        <ClipPath id="necklace_svg__ah">
          <Path d="M32.52 30.078a.287.287 0 00-.196 0c-.105.043-.14.16-.101.352.062.23.175.429.339.586.165.156.293.172.391.046.098-.109.094-.285-.015-.527-.11-.23-.25-.383-.418-.457z" />
        </ClipPath>
        <ClipPath id="necklace_svg__g">
          <Path d="M252.79 274.6h5.568v6.525h-5.568V274.6z" />
        </ClipPath>
        <ClipPath id="necklace_svg__al">
          <Path d="M36.195 29.754c.203-.484.211-.969.016-1.449a1.804 1.804 0 00-1.02-1.035 1.783 1.783 0 00-1.425-.008 1.834 1.834 0 00-1.036 1.019 1.79 1.79 0 00-.007 1.426c.195.484.527.824.996 1.023.484.208.969.215 1.453.02.48-.195.82-.527 1.023-.996z" />
        </ClipPath>
        <ClipPath id="necklace_svg__i">
          <Path d="M-2.451-7.52h12.869V4.244h-12.87V-7.52z" />
        </ClipPath>
        <ClipPath id="necklace_svg__an">
          <Path d="M33.887 27.652a.262.262 0 00-.098.164c-.016.118.07.204.25.266.234.063.461.066.68 0 .215-.062.297-.168.238-.312-.047-.141-.203-.227-.469-.25-.25-.024-.453.023-.601.132z" />
        </ClipPath>
        <ClipPath id="necklace_svg__j">
          <Path d="M-2168.8-3886.6h4.54v4.785h-4.54v-4.785z" />
        </ClipPath>
        <ClipPath id="necklace_svg__aq">
          <Path d="M26.473 28.461a1.834 1.834 0 00-1.016-1.039 1.816 1.816 0 00-1.449-.008 1.779 1.779 0 00-1.016 1 1.843 1.843 0 00-.012 1.453 1.81 1.81 0 001.004 1.016 1.8 1.8 0 001.43.019 1.838 1.838 0 001.039-1.011c.203-.481.211-.957.02-1.43z" />
        </ClipPath>
        <ClipPath id="necklace_svg__k">
          <Path d="M-3.564-8.964h13.577V4.613H-3.564V-8.964z" />
        </ClipPath>
        <ClipPath id="necklace_svg__as">
          <Path d="M23.352 28.605a.285.285 0 00.05.188c.071.09.192.094.364.008.211-.117.371-.278.48-.477s.09-.328-.055-.39c-.132-.071-.3-.02-.507.152-.192.164-.301.336-.332.519z" />
        </ClipPath>
        <ClipPath id="necklace_svg__l">
          <Path d="M-2167.9-3886.8h5.904v6.75h-5.904v-6.75z" />
        </ClipPath>
        <ClipPath id="necklace_svg__av">
          <Path d="M23.391 26.582a1.819 1.819 0 00-1.012-1.039 1.843 1.843 0 00-1.453-.012 1.81 1.81 0 00-1.016 1.004 1.826 1.826 0 00-.008 1.453c.192.473.524.813 1.004 1.016.477.203.953.207 1.426.016a1.807 1.807 0 001.039-1.012c.203-.477.211-.953.02-1.426z" />
        </ClipPath>
        <ClipPath id="necklace_svg__m">
          <Path d="M-3.315-8.794h13.577V4.783H-3.315V-8.795z" />
        </ClipPath>
        <ClipPath id="necklace_svg__ax">
          <Path d="M20.273 26.727a.266.266 0 00.047.187c.075.09.196.094.368.008.207-.121.367-.277.476-.477.109-.199.094-.332-.055-.394-.129-.067-.297-.016-.504.152-.195.164-.304.34-.332.524z" />
        </ClipPath>
        <ClipPath id="necklace_svg__n">
          <Path d="M-2167.6-3886.7h4.557v5.067h-4.557v-5.067z" />
        </ClipPath>
        <ClipPath id="necklace_svg__aA">
          <Path d="M21.27 23.539a1.83 1.83 0 00-1.012-1.039 1.833 1.833 0 00-1.449-.008 1.797 1.797 0 00-1.016 1.004 1.816 1.816 0 00-.012 1.449c.192.477.528.813 1.004 1.016.477.207.953.211 1.43.019a1.826 1.826 0 001.039-1.011c.203-.477.207-.953.016-1.43z" />
        </ClipPath>
        <ClipPath id="necklace_svg__o">
          <Path d="M-3.114-8.966h13.577V4.611H-3.114V-8.965z" />
        </ClipPath>
        <ClipPath id="necklace_svg__aC">
          <Path d="M18.152 23.688a.268.268 0 00.051.187c.07.09.192.094.363.008.211-.121.372-.281.481-.481.109-.199.09-.328-.055-.39-.133-.067-.301-.016-.508.152-.191.164-.304.34-.332.524z" />
        </ClipPath>
        <ClipPath id="necklace_svg__p">
          <Path d="M-2167.5-3887h5.904v6.75h-5.904v-6.75z" />
        </ClipPath>
        <ClipPath id="necklace_svg__aF">
          <Path d="M18.871 20.859a1.824 1.824 0 00-1.012-1.039 1.826 1.826 0 00-1.453-.008 1.799 1.799 0 00-1.015 1.004 1.819 1.819 0 00-.008 1.45c.191.476.523.812 1.004 1.015.476.207.953.211 1.425.02a1.83 1.83 0 001.04-1.012c.203-.48.21-.953.019-1.43z" />
        </ClipPath>
        <ClipPath id="necklace_svg__q">
          <Path d="M-2.09-8.658h13.577V4.919H-2.09V-8.658z" />
        </ClipPath>
        <ClipPath id="necklace_svg__aH">
          <Path d="M15.75 21.008a.266.266 0 00.051.183c.07.094.195.098.367.008a1.22 1.22 0 00.477-.476c.109-.2.093-.328-.055-.391-.129-.066-.297-.016-.504.152-.195.164-.305.34-.336.524z" />
        </ClipPath>
        <ClipPath id="necklace_svg__r">
          <Path d="M-2169.4-3887.1h5.904v6.75h-5.904v-6.75z" />
        </ClipPath>
        <ClipPath id="necklace_svg__aK">
          <Path d="M16.109 19.02a1.816 1.816 0 00-1.011-1.04 1.814 1.814 0 00-1.45-.007 1.781 1.781 0 00-1.015 1.004 1.816 1.816 0 00-.012 1.449c.191.476.527.812 1.004 1.015a1.8 1.8 0 001.43.02 1.824 1.824 0 001.039-1.012c.203-.48.207-.953.015-1.429z" />
        </ClipPath>
        <ClipPath id="necklace_svg__s">
          <Path d="M-2.43-8.161h13.577V5.416H-2.43V-8.161z" />
        </ClipPath>
        <ClipPath id="necklace_svg__aM">
          <Path d="M12.992 19.168a.27.27 0 00.051.184c.07.093.191.097.363.007.211-.117.371-.277.481-.476.109-.199.09-.328-.055-.391-.133-.066-.301-.015-.508.153-.191.164-.304.339-.332.523z" />
        </ClipPath>
        <ClipPath id="necklace_svg__t">
          <Path d="M-2169.5-3886.5h5.904v6.75h-5.904v-6.75z" />
        </ClipPath>
        <ClipPath id="necklace_svg__aP">
          <Path d="M12.602 17.047a1.826 1.826 0 00-1.247-.742c-.511-.075-.98.05-1.402.367a1.79 1.79 0 00-.723 1.23c-.074.516.051.985.368 1.403.304.41.718.652 1.23.722.516.075.977-.043 1.387-.351.422-.317.668-.731.738-1.246a1.782 1.782 0 00-.351-1.383z" />
        </ClipPath>
        <ClipPath id="necklace_svg__u">
          <Path d="M-3.12-8.794H9.823V4.563H-3.12V-8.794z" />
        </ClipPath>
        <ClipPath id="necklace_svg__aR">
          <Path d="M9.629 17.992c.012.07.043.129.098.168.089.07.207.043.351-.086.172-.168.285-.363.34-.586.055-.218.004-.34-.152-.363-.145-.031-.293.063-.45.277-.144.211-.207.407-.187.59z" />
        </ClipPath>
        <ClipPath id="necklace_svg__v">
          <Path d="M-2169.3-3887.4h5.837v6.517h-5.837v-6.517z" />
        </ClipPath>
        <ClipPath id="necklace_svg__aU">
          <Path d="M36.746 26.516a1.833 1.833 0 00-.355-1.407 1.832 1.832 0 00-1.254-.73 1.782 1.782 0 00-1.379.359c-.418.313-.66.731-.735 1.25-.074.508.047.969.36 1.383.312.414.722.66 1.226.731.524.074.993-.043 1.407-.356.418-.312.66-.723.73-1.23z" />
        </ClipPath>
        <ClipPath id="necklace_svg__w">
          <Path d="M-.628-7.927H9.1v11.5H-.628v-11.5z" />
        </ClipPath>
        <ClipPath id="necklace_svg__aW">
          <Path d="M33.973 25.082a.275.275 0 00-.051.188c.016.117.121.179.312.191.243 0 .461-.059.653-.176.195-.117.246-.238.148-.367-.078-.121-.25-.164-.512-.121-.25.047-.433.141-.55.285z" />
        </ClipPath>
        <ClipPath id="necklace_svg__x">
          <Path d="M-2169.2-3886.7h6.917v6.477h-6.917v-6.477z" />
        </ClipPath>
        <ClipPath id="necklace_svg__aZ">
          <Path d="M36.949 22.621a1.814 1.814 0 00-1.011-1.039 1.835 1.835 0 00-1.45-.012 1.799 1.799 0 00-1.015 1.004 1.826 1.826 0 00-.012 1.453c.191.473.527.813 1.004 1.016a1.8 1.8 0 001.43.019 1.835 1.835 0 001.039-1.015 1.79 1.79 0 00.015-1.426z" />
        </ClipPath>
        <ClipPath id="necklace_svg__y">
          <Path d="M-2.432-9.06h13.577V4.517H-2.432V-9.06z" />
        </ClipPath>
        <ClipPath id="necklace_svg__bb">
          <Path d="M33.832 22.766a.284.284 0 00.051.187c.07.09.191.094.363.008.211-.121.371-.277.481-.477.109-.199.089-.328-.055-.39-.133-.071-.301-.02-.508.152-.191.164-.305.336-.332.52z" />
        </ClipPath>
        <ClipPath id="necklace_svg__z">
          <Path d="M-2169.8-3887.4h5.904v6.75h-5.904v-6.75z" />
        </ClipPath>
        <ClipPath id="necklace_svg__be">
          <Path d="M35.75 19.262a1.813 1.813 0 00-1.012-1.039 1.833 1.833 0 00-1.449-.012 1.797 1.797 0 00-1.019 1.004c-.204.48-.208.961-.008 1.453.191.473.523.812 1.004 1.016.476.203.953.207 1.429.019a1.823 1.823 0 001.035-1.015c.208-.477.211-.954.02-1.426z" />
        </ClipPath>
        <ClipPath id="necklace_svg__A">
          <Path d="M-1.546-7.197H9.316V3.664H-1.546V-7.197z" />
        </ClipPath>
        <ClipPath id="necklace_svg__bg">
          <Path d="M32.633 19.406a.283.283 0 00.047.188c.074.09.195.094.367.008a1.23 1.23 0 00.48-.477c.11-.199.09-.332-.054-.395-.133-.066-.301-.015-.508.157-.192.16-.305.336-.332.519z" />
        </ClipPath>
        <ClipPath id="necklace_svg__B">
          <Path d="M-2168.6-3886.7h5.904v6.75h-5.904v-6.75z" />
        </ClipPath>
        <ClipPath id="necklace_svg__bj">
          <Path d="M33.949 15.898a1.807 1.807 0 00-1.011-1.035 1.814 1.814 0 00-1.45-.011 1.794 1.794 0 00-1.015 1.003 1.819 1.819 0 00-.012 1.45 1.8 1.8 0 001.004 1.019c.48.203.953.207 1.43.016a1.815 1.815 0 001.039-1.012 1.8 1.8 0 00.015-1.43z" />
        </ClipPath>
        <ClipPath id="necklace_svg__C">
          <Path d="M-2.214-8.518h13.577V5.059H-2.214V-8.518z" />
        </ClipPath>
        <ClipPath id="necklace_svg__bl">
          <Path d="M30.832 16.047a.283.283 0 00.051.187c.07.09.191.094.363.008.211-.121.371-.281.481-.476.109-.2.089-.332-.055-.395-.133-.066-.301-.016-.508.152-.191.165-.305.34-.332.524z" />
        </ClipPath>
        <ClipPath id="necklace_svg__D">
          <Path d="M-2169.4-3886.9h5.904v6.75h-5.904v-6.75z" />
        </ClipPath>
        <ClipPath id="necklace_svg__bo">
          <Path d="M32.352 12.98a1.846 1.846 0 00-1.012-1.039 1.822 1.822 0 00-1.453-.007 1.791 1.791 0 00-1.016 1.004c-.203.476-.207.96-.008 1.449.188.472.524.812 1 1.015.481.203.957.211 1.43.02a1.836 1.836 0 001.039-1.012c.203-.48.211-.957.02-1.43z" />
        </ClipPath>
        <ClipPath id="necklace_svg__E">
          <Path d="M-2.926-8.052h13.577V5.525H-2.926V-8.052z" />
        </ClipPath>
        <ClipPath id="necklace_svg__bq">
          <Path d="M29.23 13.125a.276.276 0 00.051.187c.071.094.192.094.364.008.21-.117.371-.277.48-.476s.09-.328-.055-.391c-.129-.07-.3-.019-.508.152-.191.165-.3.336-.332.52z" />
        </ClipPath>
        <ClipPath id="necklace_svg__F">
          <Path d="M-2168.4-3887.8h5.904v6.75h-5.904v-6.75z" />
        </ClipPath>
        <ClipPath id="necklace_svg__bt">
          <Path d="M29.992 10.141a1.83 1.83 0 00-1.015-1.039 1.814 1.814 0 00-1.45-.008 1.793 1.793 0 00-1.015 1.004 1.833 1.833 0 00-.012 1.449c.191.473.527.812 1.004 1.015a1.8 1.8 0 001.43.02 1.836 1.836 0 001.039-1.012c.203-.48.211-.957.019-1.429z" />
        </ClipPath>
        <ClipPath id="necklace_svg__G">
          <Path d="M-2.104-8.023h13.577V5.554H-2.104V-8.023z" />
        </ClipPath>
        <ClipPath id="necklace_svg__bv">
          <Path d="M26.871 10.285a.28.28 0 00.051.188c.07.093.191.093.363.007.211-.117.371-.277.481-.476.109-.199.089-.328-.055-.391-.129-.07-.301-.019-.508.153-.191.164-.301.336-.332.519z" />
        </ClipPath>
        <ClipPath id="necklace_svg__H">
          <Path d="M-2169.2-3886.5h5.904v6.75h-5.904v-6.75z" />
        </ClipPath>
        <ClipPath id="necklace_svg__by">
          <Path d="M27.473 8.141a1.831 1.831 0 00-1.016-1.039 1.812 1.812 0 00-1.449-.008 1.78 1.78 0 00-1.016 1.004 1.833 1.833 0 00-.012 1.449c.192.473.528.812 1.004 1.015a1.8 1.8 0 001.43.02 1.836 1.836 0 001.039-1.012c.203-.48.211-.957.02-1.429z" />
        </ClipPath>
        <ClipPath id="necklace_svg__I">
          <Path d="M-3.033-7.648h13.577V5.929H-3.033V-7.648z" />
        </ClipPath>
        <ClipPath id="necklace_svg__bA">
          <Path d="M24.352 8.285a.28.28 0 00.05.188c.071.093.192.093.364.007.211-.117.371-.277.48-.476s.09-.328-.055-.391c-.132-.07-.3-.019-.507.153-.192.164-.301.336-.332.519z" />
        </ClipPath>
        <ClipPath id="necklace_svg__J">
          <Path d="M-2168.3-3887.4h5.904v6.75h-5.904v-6.75z" />
        </ClipPath>
        <ClipPath id="necklace_svg__bD">
          <Path d="M23.27 6.422a1.807 1.807 0 00-1.012-1.039 1.833 1.833 0 00-1.449-.012 1.792 1.792 0 00-1.016 1.004c-.207.48-.207.961-.012 1.453a1.81 1.81 0 001.004 1.016c.477.203.953.207 1.43.019a1.832 1.832 0 001.039-1.015c.203-.477.207-.953.016-1.426z" />
        </ClipPath>
        <ClipPath id="necklace_svg__K">
          <Path d="M-2.428-7.262H10.37V4.38H-2.428V-7.262z" />
        </ClipPath>
        <ClipPath id="necklace_svg__bF">
          <Path d="M20.152 6.566a.27.27 0 00.051.188c.07.09.192.094.363.008.211-.121.372-.278.481-.477s.09-.332-.055-.394c-.133-.067-.301-.016-.508.156-.191.16-.304.336-.332.519z" />
        </ClipPath>
        <ClipPath id="necklace_svg__L">
          <Path d="M-2167.6-3887.2h5.904v6.75h-5.904v-6.75z" />
        </ClipPath>
        <ClipPath id="necklace_svg__bI">
          <Path d="M9.711 15.621a1.824 1.824 0 00-1.012-1.039 1.843 1.843 0 00-1.453-.012 1.812 1.812 0 00-1.016 1.004 1.822 1.822 0 00-.007 1.453c.191.473.523.813 1.004 1.016.476.203.953.211 1.425.019a1.83 1.83 0 001.039-1.015 1.79 1.79 0 00.02-1.426z" />
        </ClipPath>
        <ClipPath id="necklace_svg__M">
          <Path d="M-1.968-8.467H9.674V4.33H-1.968V-8.467z" />
        </ClipPath>
        <ClipPath id="necklace_svg__bK">
          <Path d="M6.594 15.766a.26.26 0 00.047.187c.07.09.195.094.367.008.207-.121.367-.277.476-.477.11-.199.094-.328-.054-.39-.129-.071-.297-.02-.504.152-.196.164-.305.336-.332.52z" />
        </ClipPath>
        <ClipPath id="necklace_svg__N">
          <Path d="M-2169.4-3887.8h5.904v6.75h-5.904v-6.75z" />
        </ClipPath>
        <ClipPath id="necklace_svg__bN">
          <Path d="M7.992 12.98a1.835 1.835 0 00-1.015-1.039 1.814 1.814 0 00-1.45-.007 1.793 1.793 0 00-1.015 1.004c-.203.476-.207.96-.012 1.449.191.472.527.812 1.004 1.015.48.203.957.211 1.43.02a1.836 1.836 0 001.039-1.012 1.8 1.8 0 00.019-1.43z" />
        </ClipPath>
        <ClipPath id="necklace_svg__O">
          <Path d="M-2.229-8.332h13.577V5.245H-2.229V-8.332z" />
        </ClipPath>
        <ClipPath id="necklace_svg__bP">
          <Path d="M4.871 13.125a.27.27 0 00.051.187c.07.094.191.094.363.008.211-.117.371-.277.481-.476.109-.199.089-.328-.055-.391-.129-.07-.301-.019-.508.152-.191.165-.301.336-.332.52z" />
        </ClipPath>
        <ClipPath id="necklace_svg__P">
          <Path d="M-2169.4-3886.7h5.904v6.75h-5.904v-6.75z" />
        </ClipPath>
        <ClipPath id="necklace_svg__bS">
          <Path d="M18.59 5.699a1.813 1.813 0 00-1.012-1.039 1.833 1.833 0 00-1.449-.008 1.804 1.804 0 00-1.02 1.004 1.829 1.829 0 00-.007 1.449c.191.477.523.813 1.003 1.016.477.207.954.211 1.43.02a1.823 1.823 0 001.035-1.012c.207-.477.211-.953.02-1.43z" />
        </ClipPath>
        <ClipPath id="necklace_svg__Q">
          <Path d="M-3.609-8.406H9.968V5.17H-3.609V-8.406z" />
        </ClipPath>
        <ClipPath id="necklace_svg__bU">
          <Path d="M15.473 5.848a.26.26 0 00.047.183c.074.094.195.098.367.012.211-.121.371-.281.48-.481.11-.199.09-.328-.055-.39-.132-.067-.3-.016-.507.152-.192.164-.305.34-.332.524z" />
        </ClipPath>
        <ClipPath id="necklace_svg__R">
          <Path d="M-2169.1-3887.9h5.904v6.75h-5.904v-6.75z" />
        </ClipPath>
        <ClipPath id="necklace_svg__bX">
          <Path d="M14.004 6.047a1.831 1.831 0 00-1.016-1.039A1.833 1.833 0 0011.539 5a1.806 1.806 0 00-1.016 1.004 1.829 1.829 0 00-.011 1.449c.191.477.527.813 1.004 1.016.48.207.953.211 1.429.019a1.811 1.811 0 001.039-1.011 1.8 1.8 0 00.02-1.43z" />
        </ClipPath>
        <ClipPath id="necklace_svg__S">
          <Path d="M142.87-366.25h13.577v13.577H142.87v-13.577z" />
        </ClipPath>
        <ClipPath id="necklace_svg__cb">
          <Path d="M7.203 9.93a1.825 1.825 0 00-1.012-1.039 1.843 1.843 0 00-1.453-.012 1.805 1.805 0 00-1.015 1.004c-.203.48-.207.961-.012 1.449.191.477.527.816 1.008 1.02.476.203.953.207 1.426.019a1.834 1.834 0 001.039-1.016c.203-.476.211-.953.019-1.425z" />
        </ClipPath>
        <ClipPath id="necklace_svg__U">
          <Path d="M142.39-366.32h13.577v13.577H142.39v-13.577z" />
        </ClipPath>
        <ClipPath id="necklace_svg__ce">
          <Path d="M9.641 7.488a1.83 1.83 0 00-1.012-1.039 1.816 1.816 0 00-1.449-.008 1.79 1.79 0 00-1.016 1 1.845 1.845 0 00-.012 1.454A1.81 1.81 0 007.156 9.91c.477.203.953.211 1.43.02.488-.2.832-.535 1.035-1.012.207-.48.211-.957.02-1.43z" />
        </ClipPath>
        <ClipPath id="necklace_svg__V">
          <Path d="M143.13-366.83h11.642v12.797H143.13v-12.797z" />
        </ClipPath>
        <Mask id="necklace_svg__Y">
          <G clipPath="url(#necklace_svg__a)">
            <Path
              d="M-.63-6.953h9.545V4.412H-.63V-6.953z"
              fill="url(#necklace_svg__b)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__ab">
          <G clipPath="url(#necklace_svg__c)">
            <Path
              d="M-2169.3-3887.3h5.568v6.524h-5.568v-6.524z"
              fill="url(#necklace_svg__d)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__ae">
          <G clipPath="url(#necklace_svg__e)">
            <Path
              d="M143.67 354.08h11.62v11.62h-11.62v-11.62z"
              fill="url(#necklace_svg__f)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__ai">
          <G clipPath="url(#necklace_svg__g)">
            <Path
              d="M252.79 274.6h5.568v6.525h-5.568V274.6z"
              fill="url(#necklace_svg__h)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__am">
          <G clipPath="url(#necklace_svg__i)">
            <Path
              d="M-2.451-7.52h12.869V4.244h-12.87V-7.52z"
              fill="url(#necklace_svg__b)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__ao">
          <G clipPath="url(#necklace_svg__j)">
            <Path
              d="M-2168.8-3886.6h4.54v4.785h-4.54v-4.785z"
              fill="url(#necklace_svg__d)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__ar">
          <G clipPath="url(#necklace_svg__k)">
            <Path
              d="M-3.564-8.964h13.577V4.613H-3.564V-8.964z"
              fill="url(#necklace_svg__b)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__at">
          <G clipPath="url(#necklace_svg__l)">
            <Path
              d="M-2167.9-3886.8h5.904v6.75h-5.904v-6.75z"
              fill="url(#necklace_svg__d)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__aw">
          <G clipPath="url(#necklace_svg__m)">
            <Path
              d="M-3.315-8.794h13.577V4.783H-3.315V-8.795z"
              fill="url(#necklace_svg__b)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__ay">
          <G clipPath="url(#necklace_svg__n)">
            <Path
              d="M-2167.6-3886.7h4.557v5.067h-4.557v-5.067z"
              fill="url(#necklace_svg__d)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__aB">
          <G clipPath="url(#necklace_svg__o)">
            <Path
              d="M-3.114-8.966h13.577V4.611H-3.114V-8.965z"
              fill="url(#necklace_svg__b)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__aD">
          <G clipPath="url(#necklace_svg__p)">
            <Path
              d="M-2167.5-3887h5.904v6.75h-5.904v-6.75z"
              fill="url(#necklace_svg__d)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__aG">
          <G clipPath="url(#necklace_svg__q)">
            <Path
              d="M-2.09-8.658h13.577V4.919H-2.09V-8.658z"
              fill="url(#necklace_svg__b)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__aI">
          <G clipPath="url(#necklace_svg__r)">
            <Path
              d="M-2169.4-3887.1h5.904v6.75h-5.904v-6.75z"
              fill="url(#necklace_svg__d)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__aL">
          <G clipPath="url(#necklace_svg__s)">
            <Path
              d="M-2.43-8.161h13.577V5.416H-2.43V-8.161z"
              fill="url(#necklace_svg__b)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__aN">
          <G clipPath="url(#necklace_svg__t)">
            <Path
              d="M-2169.5-3886.5h5.904v6.75h-5.904v-6.75z"
              fill="url(#necklace_svg__d)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__aQ">
          <G clipPath="url(#necklace_svg__u)">
            <Path
              d="M-3.12-8.794H9.823V4.563H-3.12V-8.794z"
              fill="url(#necklace_svg__b)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__aS">
          <G clipPath="url(#necklace_svg__v)">
            <Path
              d="M-2169.3-3887.4h5.837v6.517h-5.837v-6.517z"
              fill="url(#necklace_svg__d)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__aV">
          <G clipPath="url(#necklace_svg__w)">
            <Path
              d="M-.628-7.927H9.1v11.5H-.628v-11.5z"
              fill="url(#necklace_svg__b)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__aX">
          <G clipPath="url(#necklace_svg__x)">
            <Path
              d="M-2169.2-3886.7h6.917v6.477h-6.917v-6.477z"
              fill="url(#necklace_svg__d)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__ba">
          <G clipPath="url(#necklace_svg__y)">
            <Path
              d="M-2.432-9.06h13.577V4.517H-2.432V-9.06z"
              fill="url(#necklace_svg__b)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__bc">
          <G clipPath="url(#necklace_svg__z)">
            <Path
              d="M-2169.8-3887.4h5.904v6.75h-5.904v-6.75z"
              fill="url(#necklace_svg__d)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__bf">
          <G clipPath="url(#necklace_svg__A)">
            <Path
              d="M-1.546-7.197H9.316V3.664H-1.546V-7.197z"
              fill="url(#necklace_svg__b)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__bh">
          <G clipPath="url(#necklace_svg__B)">
            <Path
              d="M-2168.6-3886.7h5.904v6.75h-5.904v-6.75z"
              fill="url(#necklace_svg__d)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__bk">
          <G clipPath="url(#necklace_svg__C)">
            <Path
              d="M-2.214-8.518h13.577V5.059H-2.214V-8.518z"
              fill="url(#necklace_svg__b)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__bm">
          <G clipPath="url(#necklace_svg__D)">
            <Path
              d="M-2169.4-3886.9h5.904v6.75h-5.904v-6.75z"
              fill="url(#necklace_svg__d)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__bp">
          <G clipPath="url(#necklace_svg__E)">
            <Path
              d="M-2.926-8.052h13.577V5.525H-2.926V-8.052z"
              fill="url(#necklace_svg__b)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__br">
          <G clipPath="url(#necklace_svg__F)">
            <Path
              d="M-2168.4-3887.8h5.904v6.75h-5.904v-6.75z"
              fill="url(#necklace_svg__d)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__bu">
          <G clipPath="url(#necklace_svg__G)">
            <Path
              d="M-2.104-8.023h13.577V5.554H-2.104V-8.023z"
              fill="url(#necklace_svg__b)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__bw">
          <G clipPath="url(#necklace_svg__H)">
            <Path
              d="M-2169.2-3886.5h5.904v6.75h-5.904v-6.75z"
              fill="url(#necklace_svg__d)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__bz">
          <G clipPath="url(#necklace_svg__I)">
            <Path
              d="M-3.033-7.648h13.577V5.929H-3.033V-7.648z"
              fill="url(#necklace_svg__b)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__bB">
          <G clipPath="url(#necklace_svg__J)">
            <Path
              d="M-2168.3-3887.4h5.904v6.75h-5.904v-6.75z"
              fill="url(#necklace_svg__d)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__bE">
          <G clipPath="url(#necklace_svg__K)">
            <Path
              d="M-2.428-7.262H10.37V4.38H-2.428V-7.262z"
              fill="url(#necklace_svg__b)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__bG">
          <G clipPath="url(#necklace_svg__L)">
            <Path
              d="M-2167.6-3887.2h5.904v6.75h-5.904v-6.75z"
              fill="url(#necklace_svg__d)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__bJ">
          <G clipPath="url(#necklace_svg__M)">
            <Path
              d="M-1.968-8.467H9.674V4.33H-1.968V-8.467z"
              fill="url(#necklace_svg__b)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__bL">
          <G clipPath="url(#necklace_svg__N)">
            <Path
              d="M-2169.4-3887.8h5.904v6.75h-5.904v-6.75z"
              fill="url(#necklace_svg__d)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__bO">
          <G clipPath="url(#necklace_svg__O)">
            <Path
              d="M-2.229-8.332h13.577V5.245H-2.229V-8.332z"
              fill="url(#necklace_svg__b)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__bQ">
          <G clipPath="url(#necklace_svg__P)">
            <Path
              d="M-2169.4-3886.7h5.904v6.75h-5.904v-6.75z"
              fill="url(#necklace_svg__d)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__bT">
          <G clipPath="url(#necklace_svg__Q)">
            <Path
              d="M-3.609-8.406H9.968V5.17H-3.609V-8.406z"
              fill="url(#necklace_svg__b)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__bV">
          <G clipPath="url(#necklace_svg__R)">
            <Path
              d="M-2169.1-3887.9h5.904v6.75h-5.904v-6.75z"
              fill="url(#necklace_svg__d)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__bY">
          <G clipPath="url(#necklace_svg__S)">
            <Path
              d="M142.87-366.25h13.577v13.577H142.87v-13.577z"
              fill="url(#necklace_svg__T)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__cc">
          <G clipPath="url(#necklace_svg__U)">
            <Path
              d="M142.39-366.32h13.577v13.577H142.39v-13.577z"
              fill="url(#necklace_svg__T)"
            />
          </G>
        </Mask>
        <Mask id="necklace_svg__cf">
          <G clipPath="url(#necklace_svg__V)">
            <Path
              d="M143.13-366.83h11.642v12.797H143.13v-12.797z"
              fill="url(#necklace_svg__T)"
            />
          </G>
        </Mask>
        <RadialGradient
          id="necklace_svg__W"
          gradientUnits="userSpaceOnUse"
          cy={-3.05}
          cx={3.35}
          gradientTransform="scale(.47927 -.47927) rotate(6.941 541.351 414.803)"
          r={4.938}>
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={0.157} stopColor="#d3d3d3" />
          <Stop offset={0.577} stopColor="#636363" />
          <Stop offset={0.867} stopColor="#1c1c1c" />
          <Stop offset={1} />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__b"
          gradientUnits="userSpaceOnUse"
          cy={-2.8}
          cx={3.05}
          r={4.938}>
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={0.063} stopColor="#fff" stopOpacity={0.329} />
          <Stop offset={0.416} stopColor="#fff" stopOpacity={0} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__Z"
          gradientUnits="userSpaceOnUse"
          cy={-2.8}
          cx={3.05}
          r={4.938}>
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={0.416} stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__d"
          gradientUnits="userSpaceOnUse"
          cy={-3882.8}
          cx={-2165.5}
          r={1.333}>
          <Stop offset={0} stopColor="#fff" stopOpacity={0.42} />
          <Stop offset={0.969} stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__ac"
          gradientUnits="userSpaceOnUse"
          cy={-3882.8}
          cx={-2165.5}
          r={1.333}>
          <Stop offset={0} />
          <Stop offset={0.969} />
          <Stop offset={1} />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__f"
          gradientUnits="userSpaceOnUse"
          cy={360.75}
          cx={149.25}
          r={4.938}>
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={0.063} stopColor="#fff" stopOpacity={0.329} />
          <Stop offset={0.416} stopColor="#fff" stopOpacity={0} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__af"
          gradientUnits="userSpaceOnUse"
          cy={360.75}
          cx={149.25}
          r={4.938}>
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={0.416} stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__ag"
          gradientUnits="userSpaceOnUse"
          cy={-3}
          cx={4.85}
          gradientTransform="matrix(.058 .47568 .47568 -.058 32.334 29.012)"
          r={4.938}>
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={0.157} stopColor="#d3d3d3" />
          <Stop offset={0.577} stopColor="#636363" />
          <Stop offset={0.867} stopColor="#1c1c1c" />
          <Stop offset={1} />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__h"
          gradientUnits="userSpaceOnUse"
          cy={277.24}
          cx={254.57}
          r={1.333}>
          <Stop offset={0} stopColor="#fff" stopOpacity={0.42} />
          <Stop offset={0.969} stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__aj"
          gradientUnits="userSpaceOnUse"
          cy={277.24}
          cx={254.57}
          r={1.333}>
          <Stop offset={0} />
          <Stop offset={0.969} />
          <Stop offset={1} />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__ak"
          gradientUnits="userSpaceOnUse"
          cy={-3.05}
          cx={3.35}
          gradientTransform="matrix(.44096 .18768 .18768 -.44096 33.145 27.31)"
          r={4.938}>
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={0.157} stopColor="#d3d3d3" />
          <Stop offset={0.577} stopColor="#636363" />
          <Stop offset={0.867} stopColor="#1c1c1c" />
          <Stop offset={1} />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__ap"
          gradientUnits="userSpaceOnUse"
          cy={-3.05}
          cx={3.35}
          gradientTransform="scale(.47921 -.47921) rotate(21.949 179.005 91.388)"
          r={4.938}>
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={0.157} stopColor="#d3d3d3" />
          <Stop offset={0.577} stopColor="#636363" />
          <Stop offset={0.867} stopColor="#1c1c1c" />
          <Stop offset={1} />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__au"
          gradientUnits="userSpaceOnUse"
          cy={-3.05}
          cx={3.35}
          gradientTransform="scale(.47921 -.47921) rotate(21.949 165.676 76.777)"
          r={4.938}>
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={0.157} stopColor="#d3d3d3" />
          <Stop offset={0.577} stopColor="#636363" />
          <Stop offset={0.867} stopColor="#1c1c1c" />
          <Stop offset={1} />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__az"
          gradientUnits="userSpaceOnUse"
          cy={-3.05}
          cx={3.35}
          gradientTransform="scale(.47921 -.47921) rotate(21.949 147.107 68.542)"
          r={4.938}>
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={0.157} stopColor="#d3d3d3" />
          <Stop offset={0.577} stopColor="#636363" />
          <Stop offset={0.867} stopColor="#1c1c1c" />
          <Stop offset={1} />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__aE"
          gradientUnits="userSpaceOnUse"
          cy={-3.05}
          cx={3.35}
          gradientTransform="scale(.47921 -.47921) rotate(21.949 130.183 58.425)"
          r={4.938}>
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={0.157} stopColor="#d3d3d3" />
          <Stop offset={0.577} stopColor="#636363" />
          <Stop offset={0.867} stopColor="#1c1c1c" />
          <Stop offset={1} />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__aJ"
          gradientUnits="userSpaceOnUse"
          cy={-3.05}
          cx={3.35}
          gradientTransform="scale(.47921 -.47921) rotate(21.949 117.403 45.495)"
          r={4.938}>
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={0.157} stopColor="#d3d3d3" />
          <Stop offset={0.577} stopColor="#636363" />
          <Stop offset={0.867} stopColor="#1c1c1c" />
          <Stop offset={1} />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__aO"
          gradientUnits="userSpaceOnUse"
          cy={-3.05}
          cx={3.35}
          gradientTransform="matrix(.38296 -.288 -.288 -.38296 8.963 18.464)"
          r={4.938}>
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={0.157} stopColor="#d3d3d3" />
          <Stop offset={0.577} stopColor="#636363" />
          <Stop offset={0.867} stopColor="#1c1c1c" />
          <Stop offset={1} />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__aT"
          gradientUnits="userSpaceOnUse"
          cy={-3.05}
          cx={3.35}
          gradientTransform="matrix(.47448 .0672 .0672 -.47448 33.17 24.946)"
          r={4.938}>
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={0.157} stopColor="#d3d3d3" />
          <Stop offset={0.577} stopColor="#636363" />
          <Stop offset={0.867} stopColor="#1c1c1c" />
          <Stop offset={1} />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__aY"
          gradientUnits="userSpaceOnUse"
          cy={-3.05}
          cx={3.35}
          gradientTransform="scale(.47921 -.47921) rotate(21.949 158.517 153.869)"
          r={4.938}>
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={0.157} stopColor="#d3d3d3" />
          <Stop offset={0.577} stopColor="#636363" />
          <Stop offset={0.867} stopColor="#1c1c1c" />
          <Stop offset={1} />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__bd"
          gradientUnits="userSpaceOnUse"
          cy={-3.05}
          cx={3.35}
          gradientTransform="scale(.47921 -.47921) rotate(21.949 139.186 150.918)"
          r={4.938}>
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={0.157} stopColor="#d3d3d3" />
          <Stop offset={0.577} stopColor="#636363" />
          <Stop offset={0.867} stopColor="#1c1c1c" />
          <Stop offset={1} />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__bi"
          gradientUnits="userSpaceOnUse"
          cy={-3.05}
          cx={3.35}
          gradientTransform="scale(.47921 -.47921) rotate(21.949 119.23 144.739)"
          r={4.938}>
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={0.157} stopColor="#d3d3d3" />
          <Stop offset={0.577} stopColor="#636363" />
          <Stop offset={0.867} stopColor="#1c1c1c" />
          <Stop offset={1} />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__bn"
          gradientUnits="userSpaceOnUse"
          cy={-3.05}
          cx={3.35}
          gradientTransform="scale(.47921 -.47921) rotate(21.949 101.85 139.177)"
          r={4.938}>
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={0.157} stopColor="#d3d3d3" />
          <Stop offset={0.577} stopColor="#636363" />
          <Stop offset={0.867} stopColor="#1c1c1c" />
          <Stop offset={1} />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__bs"
          gradientUnits="userSpaceOnUse"
          cy={-3.05}
          cx={3.35}
          gradientTransform="scale(.47921 -.47921) rotate(21.949 84.106 129.442)"
          r={4.938}>
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={0.157} stopColor="#d3d3d3" />
          <Stop offset={0.577} stopColor="#636363" />
          <Stop offset={0.867} stopColor="#1c1c1c" />
          <Stop offset={1} />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__bx"
          gradientUnits="userSpaceOnUse"
          cy={-3.05}
          cx={3.35}
          gradientTransform="scale(.47921 -.47921) rotate(21.949 70.715 117.97)"
          r={4.938}>
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={0.157} stopColor="#d3d3d3" />
          <Stop offset={0.577} stopColor="#636363" />
          <Stop offset={0.867} stopColor="#1c1c1c" />
          <Stop offset={1} />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__bC"
          gradientUnits="userSpaceOnUse"
          cy={-3.05}
          cx={3.35}
          gradientTransform="scale(.47921 -.47921) rotate(21.949 57.078 97.166)"
          r={4.938}>
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={0.157} stopColor="#d3d3d3" />
          <Stop offset={0.577} stopColor="#636363" />
          <Stop offset={0.867} stopColor="#1c1c1c" />
          <Stop offset={1} />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__bH"
          gradientUnits="userSpaceOnUse"
          cy={-3.05}
          cx={3.35}
          gradientTransform="scale(.47921 -.47921) rotate(21.949 92.432 14.61)"
          r={4.938}>
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={0.157} stopColor="#d3d3d3" />
          <Stop offset={0.577} stopColor="#636363" />
          <Stop offset={0.867} stopColor="#1c1c1c" />
          <Stop offset={1} />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__bM"
          gradientUnits="userSpaceOnUse"
          cy={-3.05}
          cx={3.35}
          gradientTransform="scale(.47921 -.47921) rotate(21.949 76.433 8.11)"
          r={4.938}>
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={0.157} stopColor="#d3d3d3" />
          <Stop offset={0.577} stopColor="#636363" />
          <Stop offset={0.867} stopColor="#1c1c1c" />
          <Stop offset={1} />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__bR"
          gradientUnits="userSpaceOnUse"
          cy={-3.05}
          cx={3.35}
          gradientTransform="scale(.47921 -.47921) rotate(21.949 48.321 72.737)"
          r={4.938}>
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={0.157} stopColor="#d3d3d3" />
          <Stop offset={0.577} stopColor="#636363" />
          <Stop offset={0.867} stopColor="#1c1c1c" />
          <Stop offset={1} />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__bW"
          gradientUnits="userSpaceOnUse"
          cy={-3.05}
          cx={3.35}
          gradientTransform="scale(.47921 -.47921) rotate(21.949 45.243 47.652)"
          r={4.938}>
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={0.157} stopColor="#d3d3d3" />
          <Stop offset={0.577} stopColor="#636363" />
          <Stop offset={0.867} stopColor="#1c1c1c" />
          <Stop offset={1} />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__T"
          gradientUnits="userSpaceOnUse"
          cy={-360.85}
          cx={148.15}
          r={4.938}>
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={0.063} stopColor="#fff" stopOpacity={0.329} />
          <Stop offset={0.416} stopColor="#fff" stopOpacity={0} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__bZ"
          gradientUnits="userSpaceOnUse"
          cy={-360.85}
          cx={148.15}
          r={4.938}>
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={0.416} stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__ca"
          gradientUnits="userSpaceOnUse"
          cy={-3.05}
          cx={3.35}
          gradientTransform="scale(.47921 -.47921) rotate(21.949 59.026 7.019)"
          r={4.938}>
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={0.157} stopColor="#d3d3d3" />
          <Stop offset={0.577} stopColor="#636363" />
          <Stop offset={0.867} stopColor="#1c1c1c" />
          <Stop offset={1} />
        </RadialGradient>
        <RadialGradient
          id="necklace_svg__cd"
          gradientUnits="userSpaceOnUse"
          cy={-3.05}
          cx={3.35}
          gradientTransform="scale(.47921 -.47921) rotate(21.949 48.442 22.693)"
          r={4.938}>
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={0.157} stopColor="#d3d3d3" />
          <Stop offset={0.577} stopColor="#636363" />
          <Stop offset={0.867} stopColor="#1c1c1c" />
          <Stop offset={1} />
        </RadialGradient>
      </Defs>
      <Path
        d="M42.349 13.701a1.734 1.734 0 00-.249-.448v-.054a.593.593 0 01.102.151c.063.068.113.185.147.351zM40.55 11.65c.299.098.581.215.85.353a.586.586 0 00-.302.4c-.23-.103-.484-.2-.748-.303v-.151c0-.064.015-.118.049-.148.069-.067.117-.116.151-.151zm2.75 10.353c.034-.103.063-.187.103-.255.062.035.146.102.248.2a.736.736 0 01.195.152c-.028 0-.048.019-.048.049a4.022 4.022 0 01-.147.649 2.987 2.987 0 00-.502-.05h-.05c.069-.297.133-.545.201-.745zM42.251 26c-.2.298-.386.635-.552 1.002-.063.13-.132.262-.2.4-.132-.235-.264-.352-.4-.352.033-.102.068-.186.102-.253.2-.43.415-.797.649-1.1l.05.05c.102.067.214.15.351.253zm-16.753-8.403a7.25 7.25 0 011-.997c0 .064.036.147.103.249.035.064.084.133.146.201-.262.234-.53.483-.795.747a.64.64 0 00-.455-.2zm4.004-2.5c0-.23-.083-.382-.255-.45a.718.718 0 01.153-.097 4.896 4.896 0 011-.503l.2.302c.035.064.064.118.099.153-.43.165-.83.366-1.197.595zm-5.952 5.15c.069.103.151.2.249.303-.264.299-.533.602-.802.899 0-.297-.097-.469-.297-.497.269-.303.517-.587.752-.855a.816.816 0 01.098.15zm10-6.698v-.151a.427.427 0 00-.098-.299c.332-.131.698-.282 1.1-.449.062 0 .248.064.546.2-.595.299-1.113.533-1.548.699zM8.847 30.049c.103.034.235.049.4.049v.302c-.097.098-.213.215-.346.353a.674.674 0 00-.502-.202c-.03 0-.064.015-.098.049.2-.234.38-.415.546-.551zm3.404-1.499c.264-.2.533-.4.8-.601.099.069.181.132.25.201v.2c-.435.269-.67.518-.704.746H12.1a.62.62 0 00-.299-.546h.45zm3.599-2.651c.269-.2.551-.401.849-.601l.552.552c-.2.068-.504.2-.904.4a.638.638 0 00-.248.151c-.03-.233-.118-.4-.249-.502zm4.247-2.646l.054.146a.83.83 0 00.249.254 4.54 4.54 0 00-.498.346v-.049c.03-.234-.033-.381-.2-.449a2.15 2.15 0 01.395-.248zM6.95 34.3c-.202 0-.367.03-.499.099 0-.332.015-.567.049-.699.035-.132.068-.268.102-.4.098.068.2.152.299.249a.586.586 0 01.102.2c-.035.034-.053.083-.053.151v.4zm.8 3.697v.053c.102.133.22.299.351.499-.2.034-.316.166-.351.4v.049c0 .035.02.102.048.2-.33-.331-.532-.649-.595-.946h-.15v-.054h.15a.656.656 0 00.395-.148l.103-.102.049.049zm9.453 4.853H17.1l.049-.053c0 .034.018.048.053.053zm3.15-.351h-2.755a.736.736 0 00-.195-.151H20.2l.151.151zm-7.355-.699c-.566-.102-.995-.2-1.298-.302-.034 0-.132-.098-.298-.298.464.2 1.001.382 1.596.547v.053zM10.65 41.1l-.05-.146h.05v.146zM39.301 31c.133-.2.264-.401.401-.601l.147.553a.526.526 0 00-.098.146 1.046 1.046 0 00-.45-.098zm-2.05 3.848l-.048.102V35a2.547 2.547 0 00-.456-.351c.103-.435.202-.802.304-1.099.132 0 .249.103.352.297l-.054-.048c-.235.337-.346.586-.346.752v.151c.028.098.11.147.248.147zM25.85 41.85c-.401.069-.801.133-1.201.201H23.7v-.048a40.878 40.878 0 011.699-.304.432.432 0 00.2-.049c.069.069.152.133.25.2zm3.397-1a.71.71 0 00.304.054c-.132.028-.25.062-.352.097a.361.361 0 00.048-.151zm5.103-3.199c-.034-.268-.2-.42-.503-.448a.562.562 0 01.103-.152c.2.165.45.249.752.249l-.352.351zm-4.775 2.7a8.259 8.259 0 001.524-.8c.069.103.185.234.351.4a13.62 13.62 0 01-1.85.395h-.025v.005z"
        fillRule="evenodd"
        fill="#85733a"
      />
      <Path
        d="M7.149 38.252h.054c.062.298.263.615.595.947-.03-.098-.05-.165-.05-.2v-.049a.886.886 0 00.152.2.561.561 0 00-.049.25c0 .165.064.415.2.751a7.824 7.824 0 01-.454-.649c-.366-.567-.546-.903-.546-1 0-.103.034-.187.098-.25zm.054-.053a.548.548 0 01.2-.202c.18-.15.297-.15.346 0L7.7 37.95l-.102.102a.656.656 0 01-.395.148zm5.795 3.602v.099c0 .136.02.268.053.4-.17-.035-.336-.064-.502-.098H12.5a8.84 8.84 0 01-1.747-.752v-.049l-.103-.302v-.146c.103.028.2.048.303.048.13.064.282.132.448.2.167.2.264.298.298.298.304.102.732.2 1.299.302zm4.405.548a.736.736 0 01.195.151h2.753l.348.351h-3.497c-.035-.005-.053-.019-.053-.054.033-.097.067-.2.102-.297l.098-.098c.033 0 .053-.02.053-.053zm19.848-7.5c-.137 0-.22-.049-.248-.147v-.15c0-.167.11-.416.346-.753l.053.053a.297.297 0 00.147.147l-.298.85zm-13.55 7.153v.05h.948c.4-.07.8-.133 1.201-.202l.2.201v.049a.643.643 0 00-.297.054l-2.403.395h-.049v-.498c.132-.035.268-.049.4-.049zm7.749-2.05h.049a7.02 7.02 0 01-1.948.947.72.72 0 01-.304-.049v-.049c0-.132-.028-.235-.097-.304.097-.028.2-.062.299-.097a.203.203 0 01.126-.054h.025a13.459 13.459 0 001.85-.395z"
        fillRule="evenodd"
        fill="#625325"
      />
      <Path
        d="M37.236 11.89a2.272 2.272 0 01-.888 1.581c-.508.402-1.094.558-1.748.479a2.245 2.245 0 01-1.553-.884 2.281 2.281 0 01-.478-1.747 2.25 2.25 0 01.883-1.554 2.237 2.237 0 011.72-.483 2.272 2.272 0 011.58.89c.402.507.563 1.083.484 1.718z"
        fillRule="evenodd"
        fill="#79a9e1"
      />
      <Path
        d="M36.119 13.14c-.645 0-1.104-.176-1.383-.532l-.028-.03c.16.157.36.273.59.342.278.054.434.083.473.088.138.015.294-.005.459-.064.304-.004.558-.088.758-.244l-.118.23c-.22.151-.474.224-.751.21z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M33.955 9.585l.176-.185.157-.074c-.245.351-.343.591-.3.718.03.102.202.253.518.453.284.177.387.328.309.46l-.264.424a.291.291 0 00-.112.196c-.089.23-.084.434.014.605l.03.034-.005.03c.053.205.16.4.322.581-.327-.298-.502-.512-.527-.635-.19-.566-.137-.962.176-1.186.156-.122.19-.24.102-.352a4.971 4.971 0 01-.44-.356c-.205-.142-.302-.234-.297-.273-.015-.045.029-.191.141-.44zM35.21 13.394c-.029-.088-.107-.167-.239-.244l.034-.025c.02-.02-.015-.074-.103-.161.152.097.293.166.43.2.405.112.66.191.752.245.097.048.127.116.097.19l-.541.268-.01-.425-.025.42-.341.078c.068-.054.097-.116.087-.2.069-.073.098-.151.089-.229.009-.079-.025-.112-.108-.102l-.122-.015zM36.465 10.556a.82.82 0 00.088-.474l.01-.116.214.234a2.169 2.169 0 01-.43 1.035c-.287.41-.16.596.387.562.141-.005.317-.103.517-.298l.01.181-.225.366c-.507.2-.879.121-1.119-.23-.102-.171-.097-.351.005-.541.206-.215.362-.411.464-.576l.079-.143zM33.515 12.216c.128.582.371.924.719 1.027.272.092.478.19.63.287.165.123.175.2.029.245a2.745 2.745 0 01-.342.106c-.107.03-.245.025-.42-.019l-.258-.122.12-.015c.2.025.353-.004.465-.093.18-.14-.034-.287-.64-.438a.756.756 0 01-.273-.245 1.305 1.305 0 00-.146-.264l-.128-.434.025.274c-.356-.528-.581-1.026-.665-1.5l.108-.38.142.59c.059.151.18.317.362.499.136.175.228.341.272.482zM34.629 9.277l.122-.015c-.191.22-.22.405-.097.562l.013.093c.113.254.333.362.66.318.327-.079.498-.22.503-.42a.627.627 0 00-.131-.406l.2.083c.082.132.092.303.028.518-.077.312-.238.474-.483.484l-.332-.01-.566-.523v-.03c-.073-.21-.048-.429.083-.654z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M36.23 12.7l-.366.049c.045-.059.054-.126.025-.21l-.239-.029c.014.083-.025.126-.107.136-.06.015-.148-.097-.26-.331l-.127-.196-.068-.19c-.034-.205-.03-.328.014-.361-.014.136.083.292.308.458.166.123.328.2.484.239.796.24 1.24.113 1.342-.375l-.033.264-.206.219-.224.093c-.236.112-.416.19-.543.234zM36.826 11.294c.167-.351.225-.586.177-.718.116.225.19.449.218.674-.053.136-.102.21-.146.225-.103.029-.18.01-.234-.059l-.015-.122z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M35.078 13.496a.714.714 0 00-.38-.346c-.5-.206-.802-.411-.92-.625a1.405 1.405 0 01-.213-.479 1.78 1.78 0 00-.181-.478l-.288-.367-.068-.186c-.02-.185.004-.365.063-.536.039-.156.161-.405.361-.743l.293-.176a1.95 1.95 0 00-.376.86c-.054.298-.039.498.048.61.205.308.323.561.358.768.019.185.097.385.229.6.146.283.346.468.596.556l.371.196c.131.078.21.156.239.244l.141.346c.01.084-.019.146-.087.2l-.274.03.064-.025.068-.054c.073-.087.06-.223-.045-.395z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M34.288 9.326l.156-.01-.04.054c-.049.074-.063.195-.044.356l.186.235.567.523.107.131c.088.112.068.249-.054.415-.043.039-.215.21-.512.513-.138.147-.172.342-.103.59.024.152.063.27.108.362l-.153-.244-.072-.161.048.126-.03-.033c-.097-.172-.102-.377-.013-.605l.376-.62c.077-.128-.025-.284-.309-.46-.316-.2-.487-.352-.517-.454-.044-.126.053-.366.298-.718z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M34.654 9.824c-.123-.156-.094-.341.097-.561l.298.005a.485.485 0 00-.064.292c-.005.181.074.284.235.304.18 0 .278-.049.288-.148l.024-.21c.108.274.03.445-.24.514-.253.093-.468.024-.638-.196zM36.138 10.727c-.278.147-.488.313-.63.498l-.05.143.006-.03c-.005-.137.054-.283.171-.43.328-.36.503-.562.528-.6a.726.726 0 00.185-.552l.215.21-.01.117a2.074 2.074 0 01-.415.645zM35.469 12.759l.761-.059.03.005c.264-.01.508-.122.737-.333l.205-.218-.215.546c-.2.156-.453.24-.757.244a1.594 1.594 0 01-.528-.098l-.233-.087z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M34.903 12.964l-.103-.137a1.414 1.414 0 01-.322-.58l.005-.03-.05-.127.073.161c.015.059.069.156.177.293l.053.063c.279.357.738.533 1.383.533.277.014.531-.059.751-.21a2.428 2.428 0 01-.689.669c.03-.074 0-.142-.097-.19-.093-.054-.346-.133-.751-.245a1.446 1.446 0 01-.43-.2zM35.894 12.265c-.352-.103-.494-.4-.435-.897l.048-.143c.143-.185.353-.351.63-.498l.328-.17-.079.142-.267.21c-.309.2-.44.477-.402.825.016.2.187.341.518.425.294.072.517.072.669-.01l.132-.103.225-.366-.025.21c-.097.488-.546.615-1.342.375zM33.604 13.227c-.044-.146-.098-.253-.172-.322a.524.524 0 01-.122-.259l-.039-.395.128.434c.121.299.263.469.42.509.605.151.82.297.638.438-.11.09-.263.118-.463.093l-.122.015a2.737 2.737 0 01-.557-.4c.23.131.323.092.289-.112zM32.969 10.766l.127.435.078.103c-.22-.172-.352-.415-.395-.743l.297-.449c-.112.25-.146.47-.107.654zM35.938 10.161c.073-.112.107-.307.102-.591l.254.151c-.024.377-.215.617-.572.714l.215-.274z"
        fillRule="evenodd"
        fill="#4c5e8b"
      />
      <Path
        d="M29.078 29.223a1.82 1.82 0 00-1.398-.383 1.796 1.796 0 00-1.242.707c-.321.41-.446.875-.383 1.398a1.8 1.8 0 00.707 1.243c.406.32.867.449 1.375.386a1.818 1.818 0 001.265-.711c.321-.406.45-.867.387-1.375a1.818 1.818 0 00-.711-1.265z"
        fillRule="evenodd"
        fill="url(#necklace_svg__W)"
        transform="matrix(1.25 0 0 -1.25 0 50)"
      />
      <G
        clipPath="url(#necklace_svg__X)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__Y)"
          transform="scale(.47927 -.47927) rotate(6.941 545.458 415.055)">
          <Path
            d="M29.789 30.488a1.818 1.818 0 00-.711-1.265 1.82 1.82 0 00-1.398-.383 1.796 1.796 0 00-1.242.707c-.321.41-.446.875-.383 1.398a1.8 1.8 0 00.707 1.243c.406.32.867.449 1.375.386a1.818 1.818 0 001.265-.711c.321-.406.45-.867.387-1.375z"
            fillRule="evenodd"
            fill="url(#necklace_svg__Z)"
          />
        </G>
      </G>
      <G
        clipPath="url(#necklace_svg__aa)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__ab)"
          transform="matrix(.41446 -.24064 -.17775 -.38136 234.51 -1972.6)">
          <Path
            d="M26.738 29.824a.276.276 0 000 .192c.043.109.16.14.352.101.23-.058.426-.172.586-.336.156-.164.172-.293.047-.39-.11-.102-.285-.094-.528.015-.23.11-.383.246-.457.418z"
            fillRule="evenodd"
            fill="url(#necklace_svg__ac)"
          />
        </G>
      </G>
      <Path
        d="M39.815 8.589c.654.084 1.181.376 1.581.889a2.29 2.29 0 01.484 1.747 2.273 2.273 0 01-.884 1.554c-.512.4-1.094.561-1.749.477-.633-.072-1.15-.37-1.552-.878a2.243 2.243 0 01-.483-1.72c.078-.653.37-1.18.884-1.58a2.238 2.238 0 011.719-.49z"
        fillRule="evenodd"
        fill="#79a9e1"
      />
      <Path
        d="M41.069 9.707c0 .644-.175 1.108-.532 1.382l-.035.03a1.45 1.45 0 00.348-.592 9.61 9.61 0 00.082-.473.97.97 0 00-.058-.459c-.005-.303-.088-.558-.244-.758l.23.123c.151.22.224.469.209.747z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M37.515 11.87l-.191-.176-.068-.157c.352.245.59.343.718.3.102-.03.259-.2.454-.518.176-.284.327-.387.458-.308l.425.264a.287.287 0 00.195.111c.23.089.435.084.607-.014l.028-.03.035.005c.205-.053.4-.16.58-.322-.302.328-.512.504-.638.527-.567.192-.963.133-1.187-.174-.122-.157-.235-.192-.347-.103a4.944 4.944 0 01-.357.439c-.146.205-.238.302-.278.297-.039.02-.185-.028-.434-.141zM41.319 10.615c-.084.03-.162.108-.24.24l-.024-.035c-.02-.019-.074.015-.166.103a1.42 1.42 0 00.205-.43c.107-.405.19-.66.243-.752.05-.092.113-.127.192-.097l.263.546-.42.005.42.025.078.341a.212.212 0 00-.2-.087c-.074-.069-.151-.098-.23-.088-.083-.01-.116.029-.107.108l-.014.121zM38.486 9.365a.748.748 0 00-.473-.088l-.123-.015.24-.215c.356.044.702.187 1.035.43.405.288.591.162.556-.386 0-.141-.102-.312-.297-.517l.186-.009.361.224c.2.508.126.878-.225 1.118a.517.517 0 01-.542-.005 3.3 3.3 0 00-.582-.458l-.136-.079zM40.146 12.31c.581-.127.923-.366 1.021-.719.098-.267.19-.477.288-.628.122-.167.205-.177.249-.03.058.166.093.283.107.346a.91.91 0 01-.023.42l-.123.254-.015-.122c.025-.195-.005-.351-.092-.463-.142-.177-.288.038-.44.638a.756.756 0 01-.244.274 1.36 1.36 0 00-.259.146l-.439.128.273-.025c-.526.357-1.025.581-1.499.665l-.376-.108.586-.137c.151-.063.318-.185.499-.366.18-.137.341-.23.487-.273zM37.207 11.201l-.02-.127c.22.191.405.225.562.102l.092-.018c.259-.113.366-.333.323-.655-.078-.332-.22-.503-.42-.508a.64.64 0 00-.41.133l.088-.202c.132-.082.303-.092.513-.028.317.077.477.238.487.483l-.01.332-.522.566h-.029c-.21.074-.43.049-.654-.078z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M40.63 9.595l.044.366c-.054-.044-.123-.054-.205-.025l-.029.24c.077-.01.126.024.136.108.015.057-.097.146-.332.258l-.2.127-.185.068c-.205.034-.328.03-.362-.015.137.02.293-.082.46-.307.12-.166.2-.328.238-.484.24-.795.112-1.24-.376-1.342l.268.033.21.205.098.225c.112.235.191.415.235.543zM39.224 8.999c-.351-.166-.591-.224-.718-.175.219-.118.444-.191.674-.22.136.054.21.102.224.146.03.107.01.181-.058.235l-.122.014z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M41.426 10.748a.732.732 0 00-.352.38c-.2.498-.41.806-.625.918-.108.088-.268.162-.478.215s-.366.117-.473.185l-.367.284-.191.068a1.226 1.226 0 01-.531-.063c-.157-.04-.407-.161-.743-.362l-.176-.293c.24.185.522.313.86.376.292.054.497.039.605-.048.307-.205.566-.323.771-.357.181-.02.381-.098.601-.23.278-.146.464-.346.557-.596l.195-.37c.078-.132.156-.21.24-.24l.351-.141c.077-.01.146.02.2.087l.025.274-.02-.064-.054-.068c-.092-.068-.225-.053-.395.045z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M37.256 11.538l-.015-.157.059.04c.073.049.19.064.356.044l.23-.186.523-.566.136-.108c.107-.088.249-.068.415.054.034.044.205.215.512.514.142.136.338.17.592.102.146-.025.269-.059.356-.107l-.244.15-.161.073.126-.044-.028.026c-.177.097-.377.102-.607.013l-.62-.375c-.131-.073-.282.024-.458.308-.2.317-.352.487-.454.517-.128.044-.366-.054-.718-.299z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M37.749 11.172c-.157.122-.342.093-.562-.098l.01-.298a.483.483 0 00.293.064c.181 0 .279-.079.297-.235.005-.18-.043-.278-.146-.288l-.205-.024c.274-.108.445-.03.513.245.093.248.025.463-.2.634zM38.657 9.683c.147.283.313.493.498.635l.143.048-.03-.005c-.142.005-.283-.053-.43-.171-.367-.326-.562-.502-.6-.527a.735.735 0 00-.553-.185l.205-.22.122.015c.27.117.484.253.645.41zM40.689 10.356l-.059-.761.005-.03c-.01-.264-.122-.507-.338-.737l-.214-.205.547.215c.156.2.239.455.239.757 0 .18-.034.356-.093.533l-.087.228z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M40.889 10.922l-.133.103c-.18.161-.375.269-.58.322l-.035-.005-.121.05.156-.073c.063-.015.162-.069.293-.177l.068-.053c.357-.274.532-.738.532-1.382a1.174 1.174 0 00-.209-.747c.273.195.498.42.669.684-.079-.03-.143.005-.192.097-.053.093-.136.346-.243.756a1.584 1.584 0 01-.205.425zM40.195 9.931c-.103.353-.4.499-.897.435l-.143-.044a1.943 1.943 0 01-.498-.634l-.17-.323.14.079.205.263c.205.308.484.444.83.405.202-.015.343-.19.425-.522.074-.293.074-.512-.01-.664l-.106-.137-.361-.224.209.024c.488.102.616.547.376 1.342zM41.152 12.221a.762.762 0 00-.322.171.486.486 0 01-.254.123l-.4.044.439-.128c.297-.126.464-.269.504-.425.156-.6.302-.815.438-.639.088.113.123.27.098.464l.015.126a2.757 2.757 0 01-.4.553c.126-.23.087-.323-.118-.289zM38.691 12.856l.44-.126.098-.079c-.167.225-.415.352-.738.397l-.449-.3c.25.113.464.147.65.108zM38.091 9.887c-.112-.072-.312-.107-.591-.102l.151-.254c.376.029.615.22.713.571l-.273-.215z"
        fillRule="evenodd"
        fill="#4c5e8b"
      />
      <G
        clipPath="url(#necklace_svg__ad)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__ae)"
          transform="matrix(.058 .47568 -.47568 .058 194.02 -60.48)">
          <Path
            d="M33.117 32.418c.321-.41.449-.875.387-1.398a1.818 1.818 0 00-.707-1.243 1.814 1.814 0 00-1.399-.382 1.791 1.791 0 00-1.242.703c-.32.41-.449.867-.386 1.375.062.523.296.945.707 1.265.41.321.867.453 1.375.391a1.822 1.822 0 001.265-.711z"
            fillRule="evenodd"
            fill="url(#necklace_svg__af)"
          />
        </G>
      </G>
      <Path
        d="M33.055 32.16c.32-.41.449-.879.386-1.398a1.792 1.792 0 00-.707-1.242 1.827 1.827 0 00-1.398-.387 1.796 1.796 0 00-1.242.707c-.321.41-.449.867-.387 1.375.063.523.301.945.707 1.265.41.321.867.45 1.375.387a1.832 1.832 0 001.266-.707z"
        fillRule="evenodd"
        fill="url(#necklace_svg__ag)"
        transform="matrix(1.25 0 0 -1.25 0 50)"
      />
      <G
        clipPath="url(#necklace_svg__ah)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__ai)"
          transform="matrix(.24072 .4144 -.38128 .17776 77.419 -124.3)">
          <Path
            d="M32.52 30.078a.287.287 0 00-.196 0c-.105.043-.14.16-.101.352.062.23.175.429.339.586.165.156.293.172.391.046.098-.109.094-.285-.015-.527-.11-.23-.25-.383-.418-.457z"
            fillRule="evenodd"
            fill="url(#necklace_svg__aj)"
          />
        </G>
      </G>
      <Path
        d="M45.244 12.807c.253.605.263 1.212.02 1.812-.239.606-.664 1.035-1.275 1.293a2.23 2.23 0 01-1.781.01 2.292 2.292 0 01-1.295-1.273 2.237 2.237 0 01-.01-1.783 2.242 2.242 0 011.246-1.279 2.278 2.278 0 011.816-.025c.6.244 1.025.66 1.279 1.245z"
        fillRule="evenodd"
        fill="#79a9e1"
      />
      <Path
        d="M44.898 14.453c-.557.322-1.046.4-1.46.23l-.04-.015c.22.058.444.058.684 0 .264-.088.416-.142.45-.162a.99.99 0 00.37-.282c.26-.157.436-.352.533-.587l.009.26c-.112.24-.293.424-.547.555z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M41.25 12.456l.059-.254.102-.137c-.038.425-.005.684.098.767.078.078.302.122.678.137.328.01.494.092.494.243l-.02.5a.302.302 0 000 .228c.039.245.146.415.318.512l.043.015.01.03c.152.152.342.268.567.342-.43-.098-.689-.19-.772-.288-.45-.396-.596-.762-.445-1.114.08-.18.05-.302-.082-.35a6.524 6.524 0 01-.556-.09c-.25-.023-.387-.057-.402-.092-.033-.029-.063-.18-.092-.449zM44.244 15.123c-.069-.06-.181-.09-.333-.09l.015-.038c.009-.024-.045-.059-.166-.092.175.015.331 0 .469-.034.41-.113.669-.166.776-.171.107 0 .166.038.18.12l-.336.505-.22-.367.19.377-.259.238a.2.2 0 00-.024-.215c.024-.097.01-.18-.038-.243-.03-.074-.08-.088-.148-.04l-.106.05zM43.906 12.041a.78.78 0 00-.161-.454l-.044-.107.303.097c.136.332.186.703.146 1.108-.049.499.156.596.611.294.121-.074.219-.244.303-.518l.097.156-.015.425c-.336.43-.697.547-1.084.367a.527.527 0 01-.263-.474c.073-.294.107-.538.112-.733l-.005-.16zM42.183 14.956c.405.434.78.61 1.137.528.279-.059.508-.079.689-.069.205.025.254.087.146.2a2.42 2.42 0 01-.244.264c-.073.078-.2.141-.371.195l-.284.02.099-.074c.18-.078.303-.18.356-.313.083-.21-.176-.228-.776-.062a.726.726 0 01-.357-.074 1.436 1.436 0 00-.26-.151l-.33-.318.16.225c-.575-.273-1.015-.596-1.323-.967l-.097-.38.415.444c.127.097.317.181.56.248.21.084.372.177.48.284zM41.675 11.85l.103-.072c-.054.282.01.458.195.537l.058.068c.225.166.469.15.733-.05.244-.233.317-.438.225-.614a.626.626 0 00-.318-.288l.215-.03c.137.074.234.215.283.435.087.308.03.528-.175.659l-.294.156-.751-.166-.015-.029c-.171-.141-.254-.346-.259-.606z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M44.78 14.014l-.297.225c.015-.074-.015-.138-.083-.196l-.22.097c.049.064.044.123-.025.171-.044.044-.175-.01-.39-.156l-.21-.107-.151-.132c-.133-.161-.192-.263-.172-.317.06.126.22.21.498.244.205.02.381.01.538-.034.81-.19 1.132-.528.976-1.001l.102.248-.067.289-.148.195a8.824 8.824 0 01-.351.474zM44.59 12.5c-.03-.386-.098-.625-.205-.712.215.136.39.292.527.477.02.143.014.235-.014.269-.08.074-.157.097-.236.064l-.072-.098z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M44.18 15.279c-.176-.098-.343-.138-.504-.113-.531.078-.902.049-1.112-.078a1.393 1.393 0 01-.42-.308 1.741 1.741 0 00-.4-.322l-.43-.17-.151-.133a1.253 1.253 0 01-.215-.497c-.044-.152-.064-.43-.054-.82l.166-.3c-.049.303-.015.612.103.933.097.284.215.45.346.504.327.165.561.326.693.483.108.152.273.288.498.41.269.166.532.23.796.18l.415-.014c.152 0 .264.03.333.089l.292.233a.2.2 0 01.024.215l-.224.162.044-.054.034-.079c.015-.111-.064-.219-.234-.321z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M41.411 12.065l.123-.088v.07c-.01.087.038.194.136.325l.279.113.751.166.156.064c.133.054.191.18.166.385-.02.054-.082.289-.19.699-.048.195.02.386.205.566.098.117.19.2.273.259l-.254-.137-.136-.102.098.082-.04-.015c-.17-.097-.278-.267-.317-.512l.02-.728c0-.15-.166-.233-.493-.243-.377-.015-.6-.059-.68-.137-.102-.083-.136-.342-.097-.767z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M41.973 12.315c-.185-.079-.25-.255-.195-.538l.263-.146a.498.498 0 00.088.288c.087.156.205.205.351.141.161-.088.22-.175.181-.268l-.083-.196c.23.186.244.376.044.566-.17.207-.39.255-.65.153zM43.711 12.354c-.166.263-.268.512-.298.746l.03.147-.01-.025a.687.687 0 01-.07-.463c.103-.474.157-.738.157-.782.04-.21.005-.4-.111-.57l.292.073.044.107a1.96 1.96 0 01-.034.767zM44.15 14.444l.63-.43.025-.01c.224-.141.38-.356.474-.659l.067-.289.089.582c-.098.235-.274.43-.532.586a1.58 1.58 0 01-.508.18l-.245.04z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M43.76 14.903l-.161-.064a1.414 1.414 0 01-.566-.341l-.015-.03-.098-.083.136.103a.975.975 0 00.304.166l.078.029c.415.17.903.092 1.46-.23.253-.132.435-.317.546-.557a2.456 2.456 0 01-.259.923c-.014-.083-.072-.121-.18-.121-.107.005-.366.058-.776.17a1.44 1.44 0 01-.469.035zM44.267 13.809c-.35.087-.63-.103-.825-.561l-.03-.148c.03-.234.133-.482.3-.746l.194-.313.005.162-.127.317c-.165.326-.142.634.063.913.118.17.338.205.664.107.294-.077.484-.19.571-.337l.064-.16.015-.425.083.19c.156.473-.167.81-.977 1zM42.764 15.781a.71.71 0 00-.308-.19.549.549 0 01-.235-.161l-.233-.328.33.318c.256.195.46.269.617.225.6-.166.859-.147.776.063-.053.132-.171.234-.356.312l-.099.074a2.573 2.573 0 01-.679-.069c.26 0 .323-.083.187-.244zM40.981 13.97l.333.317.117.044c-.273-.034-.513-.181-.713-.445l.034-.536c.03.272.108.477.23.62zM43.256 11.962c.005-.136-.062-.322-.209-.566l.298.005c.166.343.117.645-.138.909l.05-.348z"
        fillRule="evenodd"
        fill="#4c5e8b"
      />
      <Path
        d="M36.211 28.305a1.804 1.804 0 00-1.02-1.035 1.783 1.783 0 00-1.425-.008 1.834 1.834 0 00-1.036 1.019 1.79 1.79 0 00-.007 1.426c.195.484.527.824.996 1.023.484.208.969.215 1.453.02.48-.195.82-.527 1.023-.996.203-.484.211-.969.016-1.449z"
        fillRule="evenodd"
        fill="url(#necklace_svg__ak)"
        transform="matrix(1.25 0 0 -1.25 0 50)"
      />
      <G
        clipPath="url(#necklace_svg__al)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__am)"
          transform="matrix(.44096 .18768 .18768 -.44096 33.051 27.53)">
          <Path
            d="M36.195 29.754c.203-.484.211-.969.016-1.449a1.804 1.804 0 00-1.02-1.035 1.783 1.783 0 00-1.425-.008 1.834 1.834 0 00-1.036 1.019 1.79 1.79 0 00-.007 1.426c.195.484.527.824.996 1.023.484.208.969.215 1.453.02.48-.195.82-.527 1.023-.996z"
            fill="url(#necklace_svg__Z)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <G
        clipPath="url(#necklace_svg__an)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__ao)"
          transform="matrix(.47921 -.0012 .03671 -.41912 1214.8 -1602.5)">
          <Path
            d="M33.887 27.652a.262.262 0 00-.098.164c-.016.118.07.204.25.266.234.063.461.066.68 0 .215-.062.297-.168.238-.312-.047-.141-.203-.227-.469-.25-.25-.024-.453.023-.601.132z"
            fill="url(#necklace_svg__ac)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <Path
        d="M33.091 14.424c-.25.61-.668 1.045-1.27 1.298a2.27 2.27 0 01-1.811.01c-.596-.235-1.016-.655-1.27-1.25a2.303 2.303 0 01-.015-1.816c.24-.591.66-1.016 1.255-1.27.601-.254 1.192-.264 1.787-.024.61.25 1.046.67 1.3 1.264.253.601.263 1.196.024 1.788z"
        fillRule="evenodd"
        fill="#79a9e1"
      />
      <Path
        d="M31.685 15.341c-.625-.16-1.021-.453-1.201-.868l-.015-.04c.112.196.273.362.483.49.25.12.395.19.434.205.128.053.284.067.46.057.293.074.557.059.79-.039l-.175.191a1.172 1.172 0 01-.776.004z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M30.518 11.352l.215-.136.17-.03c-.327.279-.483.484-.473.615 0 .108.126.304.385.576.225.24.284.415.176.523l-.366.337a.304.304 0 00-.161.162c-.141.2-.19.395-.136.59l.013.04-.008.028c0 .215.048.43.156.645-.235-.376-.348-.625-.343-.752-.038-.595.123-.961.479-1.099.181-.077.244-.18.185-.312a5.737 5.737 0 01-.331-.459c-.156-.19-.23-.307-.215-.341-.005-.045.082-.177.254-.387zM30.742 15.351c-.005-.087-.063-.185-.17-.292l.038-.02c.03-.01.01-.068-.054-.18.118.131.24.234.361.307.367.21.587.351.665.43.078.073.093.141.044.21l-.596.117.102-.415-.126.4-.352-.01a.208.208 0 00.132-.17c.088-.054.136-.123.146-.2.03-.074.005-.118-.077-.133l-.113-.044zM32.685 12.94a.772.772 0 00.205-.435l.05-.113.141.284c-.132.336-.361.63-.679.889-.386.316-.312.531.225.639.137.035.332-.014.58-.152l-.038.177-.313.297c-.541.059-.884-.112-1.025-.512a.535.535 0 01.146-.523 3.14 3.14 0 00.597-.435l.111-.116zM29.409 13.779c-.024.596.117.986.43 1.177.239.162.415.308.532.439.132.161.118.245-.033.245-.177.014-.3.019-.363.014a.872.872 0 01-.4-.126l-.215-.187.122.02c.185.074.342.083.474.029.205-.087.039-.287-.507-.59a.761.761 0 01-.202-.307 1.227 1.227 0 00-.072-.29l-.01-.458-.049.274c-.21-.601-.292-1.138-.249-1.616l.2-.343-.02.606c.025.162.098.352.225.577.088.205.132.385.137.536zM31.245 11.225l.122.02c-.24.161-.317.333-.24.518l-.008.092c.043.274.223.435.551.479.341.01.537-.083.595-.274a.665.665 0 00-.019-.429l.172.131c.048.152.008.318-.108.508-.156.284-.352.396-.591.343l-.318-.093-.415-.655.01-.024c-.015-.225.069-.43.249-.616z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M31.909 14.951l-.366-.053c.058-.04.083-.103.078-.195l-.225-.09c-.01.085-.059.118-.136.108-.064-.005-.123-.136-.166-.39l-.074-.225-.014-.2c.014-.205.054-.322.103-.341-.049.126.01.303.18.523.127.16.263.277.405.356.703.434 1.172.429 1.392-.02l-.097.249-.259.156-.24.035a5.54 5.54 0 01-.581.087zM32.846 13.745c.25-.293.372-.508.357-.645.053.245.068.479.04.709-.093.112-.157.171-.206.176-.107 0-.176-.04-.21-.118l.02-.122z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M30.591 15.42a.775.775 0 00-.279-.435c-.43-.322-.673-.605-.727-.845a1.343 1.343 0 01-.083-.517c0-.21-.014-.38-.053-.503l-.182-.43-.02-.2a1.27 1.27 0 01.206-.497c.078-.143.26-.353.537-.625l.333-.093c-.25.18-.445.424-.587.731-.131.274-.171.469-.112.602.117.35.166.63.146.835-.029.18-.009.395.064.64.073.307.215.536.435.692l.302.284c.108.107.166.205.171.292l.044.377a.208.208 0 01-.132.17l-.273-.043.068-.01.078-.03c.093-.072.113-.205.064-.395z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M30.904 11.186l.151.03-.049.044c-.068.059-.112.171-.137.331l.117.274.415.655.069.156c.054.126 0 .259-.156.385a10.97 10.97 0 00-.63.361c-.171.103-.254.284-.254.543a1.29 1.29 0 00.01.376l-.084-.273-.023-.172.008.133-.013-.04c-.054-.195-.005-.39.136-.59l.527-.499c.108-.107.049-.282-.176-.522-.259-.273-.385-.47-.385-.577-.01-.131.146-.336.474-.615z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M31.128 11.763c-.078-.185 0-.357.24-.518l.287.083a.493.493 0 00-.141.268c-.049.172.005.289.151.353.176.049.279.024.318-.069l.077-.195c.035.293-.088.439-.366.434-.268.02-.459-.098-.566-.356zM32.329 13.023a1.962 1.962 0 00-.738.312l-.087.128.015-.025a.658.658 0 01.279-.372c.41-.269.628-.415.663-.444a.754.754 0 00.323-.483l.156.254-.05.112c-.175.23-.361.4-.561.517zM31.157 14.81l.752.141.025.01c.258.059.522.014.796-.132l.259-.156-.353.473a1.229 1.229 0 01-.79.039 1.649 1.649 0 01-.489-.229l-.2-.146z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M30.556 14.859l-.067-.156a1.424 1.424 0 01-.157-.645l.01-.03-.01-.132.024.171c0 .064.03.172.098.328l.03.078c.18.415.576.708 1.201.868.268.089.528.084.776-.003-.258.213-.537.37-.835.468.049-.068.034-.137-.044-.21-.078-.078-.298-.22-.665-.43a1.627 1.627 0 01-.36-.307zM31.694 14.444c-.313-.191-.375-.518-.19-.981l.087-.128c.186-.136.43-.244.738-.312l.356-.083-.111.116-.313.133c-.347.117-.547.346-.601.692-.039.202.093.382.396.548.259.146.473.2.644.161l.156-.064.313-.297-.083.195c-.22.449-.688.454-1.392.02zM29.234 14.775a.724.724 0 00-.084-.356.543.543 0 01-.049-.279l.064-.395.01.459c.044.317.131.517.274.596.546.302.712.502.507.59-.132.054-.288.045-.473-.029l-.123-.02a2.9 2.9 0 01-.434-.526c.185.18.288.17.308-.04zM29.258 12.236l.01.454.048.117c-.171-.22-.233-.492-.185-.82l.4-.35c-.171.21-.263.41-.273.6zM32.28 12.422c.103-.088.186-.273.254-.547l.205.215c-.122.356-.37.537-.737.541l.278-.209z"
        fillRule="evenodd"
        fill="#4c5e8b"
      />
      <Path
        d="M25.457 27.422a1.816 1.816 0 00-1.449-.008 1.79 1.79 0 00-1.016 1 1.843 1.843 0 00-.012 1.453 1.81 1.81 0 001.004 1.016 1.8 1.8 0 001.43.019 1.838 1.838 0 001.039-1.011c.203-.481.207-.957.016-1.43a1.815 1.815 0 00-1.012-1.039z"
        fillRule="evenodd"
        fill="url(#necklace_svg__ap)"
        transform="matrix(1.25 0 0 -1.25 0 50)"
      />
      <G
        clipPath="url(#necklace_svg__aq)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__ar)"
          transform="scale(.47921 -.47921) rotate(21.949 180.293 91.64)">
          <Path
            d="M26.473 28.461a1.834 1.834 0 00-1.016-1.039 1.816 1.816 0 00-1.449-.008 1.779 1.779 0 00-1.016 1 1.843 1.843 0 00-.012 1.453 1.81 1.81 0 001.004 1.016 1.8 1.8 0 001.43.019 1.838 1.838 0 001.039-1.011c.203-.481.211-.957.02-1.43z"
            fill="url(#necklace_svg__Z)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <G
        clipPath="url(#necklace_svg__as)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__at)"
          transform="matrix(.33797 -.33971 -.27041 -.32229 -294.44 -1959)">
          <Path
            d="M23.352 28.605a.285.285 0 00.05.188c.071.09.192.094.364.008.211-.117.371-.278.48-.477s.09-.328-.055-.39c-.132-.071-.3-.02-.507.152-.192.164-.301.336-.332.519z"
            fill="url(#necklace_svg__ac)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <Path
        d="M29.239 16.773a2.273 2.273 0 01-1.265 1.298 2.303 2.303 0 01-1.817.015 2.262 2.262 0 01-1.27-1.255 2.282 2.282 0 01-.01-1.816 2.247 2.247 0 011.255-1.27 2.243 2.243 0 011.783-.02 2.259 2.259 0 011.299 1.265c.253.596.263 1.191.025 1.783z"
        fillRule="evenodd"
        fill="#79a9e1"
      />
      <Path
        d="M27.832 17.695c-.62-.166-1.02-.454-1.196-.874l-.02-.039c.118.2.279.362.484.488.254.122.395.191.434.205a.992.992 0 00.463.059c.294.073.553.063.787-.039l-.17.19a1.179 1.179 0 01-.782.01z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M26.665 13.701l.22-.136.171-.03c-.327.279-.484.484-.474.62 0 .108.127.298.38.571.225.245.284.415.177.523l-.362.342a.258.258 0 00-.16.162c-.147.2-.19.395-.142.585l.019.04-.014.028c0 .215.054.43.16.645-.239-.376-.351-.625-.341-.752-.039-.597.117-.962.474-1.099.18-.077.243-.18.19-.313a5.383 5.383 0 01-.332-.453c-.161-.195-.23-.308-.215-.346-.005-.045.078-.172.249-.387zM26.895 17.705c-.005-.092-.064-.19-.171-.297l.038-.016c.025-.015.005-.073-.058-.185.122.137.24.234.361.308.366.21.591.356.67.429.077.074.092.147.044.21l-.597.117.103-.41-.131.4-.353-.013c.079-.036.128-.09.138-.172.082-.054.131-.117.146-.2.029-.074 0-.117-.079-.127l-.111-.044zM28.837 15.288a.749.749 0 00.205-.434l.045-.108.147.283a2.22 2.22 0 01-.684.889c-.386.317-.308.532.229.64.137.033.327-.02.576-.157l-.039.182-.312.292c-.542.059-.884-.107-1.02-.508a.508.508 0 01.146-.522c.254-.156.454-.303.595-.44l.112-.117zM25.556 16.133c-.024.59.123.98.435 1.172a3.3 3.3 0 01.533.439c.126.161.116.245-.035.25-.18.008-.298.018-.362.013-.107 0-.243-.043-.4-.13l-.22-.182.123.015c.185.074.346.083.474.029.21-.088.038-.283-.504-.59a.72.72 0 01-.2-.308 1.28 1.28 0 00-.077-.289l-.01-.453-.044.268c-.21-.6-.294-1.137-.254-1.616l.205-.342-.02.611c.02.156.092.346.22.571.087.21.136.39.136.541zM27.393 13.579l.122.015c-.235.161-.318.337-.24.517l-.005.093c.04.273.225.435.548.483.34.006.542-.087.6-.278a.633.633 0 00-.024-.429l.171.136c.049.146.014.318-.102.503-.157.283-.358.396-.592.342l-.317-.092-.415-.655.01-.024c-.02-.225.064-.43.244-.611z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M28.056 17.3l-.366-.049c.059-.044.089-.107.079-.195l-.22-.094c-.015.084-.059.118-.142.108-.063-.005-.117-.131-.166-.39l-.074-.22-.013-.2c.018-.21.053-.323.107-.348-.054.128.004.304.175.523.133.161.264.279.405.358.709.433 1.173.428 1.398-.02l-.103.253-.255.152-.238.035a5.593 5.593 0 01-.587.087zM28.994 16.094c.253-.293.371-.508.356-.645.059.245.074.479.04.709-.089.117-.156.174-.2.174-.108 0-.176-.038-.21-.116l.014-.122z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M26.739 17.769a.738.738 0 00-.279-.435c-.43-.323-.669-.605-.723-.84-.058-.132-.083-.303-.083-.518s-.019-.385-.054-.507l-.185-.43-.015-.2c.03-.18.098-.347.2-.498.079-.142.26-.347.542-.62l.328-.099c-.245.187-.44.43-.586.733-.128.274-.167.474-.113.601.118.351.166.63.146.835-.028.18-.005.395.07.64.068.308.214.541.43.693l.307.283c.107.108.166.205.171.298l.044.371c-.01.083-.059.136-.138.171l-.267-.045.062-.003.079-.035c.092-.068.117-.2.064-.395z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M27.056 13.535l.151.03-.053.044c-.064.058-.113.17-.133.336l.118.269.415.655.063.156c.06.131.005.259-.156.39-.049.02-.259.141-.63.356-.171.103-.254.289-.249.548-.015.151-.01.272.01.375l-.083-.278-.029-.171.014.132-.019-.04c-.049-.19-.005-.385.141-.585l.523-.503c.107-.108.048-.278-.177-.523-.253-.274-.38-.464-.38-.571-.01-.136.147-.341.474-.62z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M27.275 14.111c-.077-.18.005-.356.24-.517l.292.082a.468.468 0 00-.14.269c-.05.176 0 .294.15.352.172.05.28.024.318-.068l.077-.195c.03.292-.092.438-.37.433-.265.025-.455-.097-.567-.356zM28.481 15.371a1.912 1.912 0 00-.742.318l-.083.126.01-.029c.034-.136.127-.258.278-.371.411-.269.63-.415.665-.444a.719.719 0 00.322-.483l.157.258-.045.108a2.04 2.04 0 01-.562.517zM27.31 17.159l.746.141.03.01c.254.063.523.019.795-.133l.255-.15-.352.468c-.234.102-.493.112-.786.039a1.746 1.746 0 01-.493-.229l-.195-.146z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M26.704 17.207l-.064-.156a1.446 1.446 0 01-.16-.645l.014-.029-.014-.132.029.171c-.005.064.028.175.092.328l.035.077c.175.42.577.708 1.197.874.267.084.527.084.78-.01-.258.22-.537.376-.834.469.048-.063.033-.137-.044-.21-.079-.073-.304-.219-.67-.429a1.606 1.606 0 01-.361-.308zM27.841 16.793c-.312-.192-.37-.518-.185-.978l.083-.126c.186-.141.435-.249.742-.318l.356-.083-.112.117-.313.133c-.35.116-.55.35-.6.692-.038.201.093.381.39.548.264.146.48.205.645.16l.157-.063.312-.292-.077.19c-.225.448-.689.458-1.398.02zM25.386 17.124a.783.783 0 00-.083-.356.552.552 0 01-.054-.28l.064-.39.01.455c.043.317.136.517.277.596.542.307.714.502.504.59-.128.054-.289.045-.469-.029l-.128-.015a3.078 3.078 0 01-.43-.532c.187.186.29.17.31-.04zM25.405 14.585l.01.454.049.117c-.166-.22-.229-.494-.185-.815l.4-.356c-.171.209-.259.41-.274.6zM28.432 14.77c.098-.088.187-.268.25-.546l.204.215c-.121.356-.366.541-.732.541l.278-.21z"
        fillRule="evenodd"
        fill="#4c5e8b"
      />
      <Path
        d="M22.379 25.543a1.843 1.843 0 00-1.453-.012 1.81 1.81 0 00-1.016 1.004 1.826 1.826 0 00-.008 1.453c.192.473.524.813 1.004 1.016.477.203.953.207 1.426.016a1.807 1.807 0 001.039-1.012c.203-.477.211-.953.02-1.426a1.819 1.819 0 00-1.012-1.039z"
        fillRule="evenodd"
        fill="url(#necklace_svg__au)"
        transform="matrix(1.25 0 0 -1.25 0 50)"
      />
      <G
        clipPath="url(#necklace_svg__av)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__aw)"
          transform="scale(.47921 -.47921) rotate(21.949 166.964 77.03)">
          <Path
            d="M23.391 26.582a1.819 1.819 0 00-1.012-1.039 1.843 1.843 0 00-1.453-.012 1.81 1.81 0 00-1.016 1.004 1.826 1.826 0 00-.008 1.453c.192.473.524.813 1.004 1.016.477.203.953.207 1.426.016a1.807 1.807 0 001.039-1.012c.203-.477.211-.953.02-1.426z"
            fill="url(#necklace_svg__Z)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <G
        clipPath="url(#necklace_svg__ax)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__ay)"
          transform="matrix(.33797 -.33971 -.27041 -.32229 -297.52 -1960.9)">
          <Path
            d="M20.273 26.727a.266.266 0 00.047.187c.075.09.196.094.368.008.207-.121.367-.277.476-.477.109-.199.094-.332-.055-.394-.129-.067-.297-.016-.504.152-.195.164-.304.34-.332.524z"
            fill="url(#necklace_svg__ac)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <Path
        d="M26.587 20.576a2.288 2.288 0 01-1.265 1.299 2.291 2.291 0 01-1.81.01 2.247 2.247 0 01-1.27-1.255c-.26-.596-.26-1.201-.016-1.811.24-.597.66-1.017 1.255-1.27a2.23 2.23 0 011.788-.024c.61.244 1.045.669 1.298 1.264.254.596.26 1.191.02 1.787z"
        fillRule="evenodd"
        fill="#79a9e1"
      />
      <Path
        d="M25.185 21.494c-.625-.167-1.025-.454-1.2-.869l-.015-.039c.112.195.274.357.483.483.25.122.396.191.43.206.132.053.283.073.463.058.294.073.558.063.792-.04l-.175.192c-.25.093-.514.098-.778.009z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M24.014 17.505l.22-.141.17-.025c-.327.274-.483.484-.473.615 0 .107.126.299.38.571.23.245.289.42.181.528l-.366.337a.284.284 0 00-.161.161c-.146.2-.19.395-.141.585l.018.045-.01.024c-.005.215.05.43.157.645-.234-.371-.352-.625-.342-.752-.038-.595.118-.962.474-1.1.185-.077.249-.18.19-.312a4.922 4.922 0 01-.331-.453c-.156-.195-.23-.308-.215-.347-.005-.045.077-.171.249-.381zM24.244 21.504c-.005-.088-.064-.19-.172-.298l.04-.015c.024-.01.01-.072-.055-.185.118.137.24.239.362.308.366.215.586.356.663.43.08.072.094.146.045.214l-.596.112.103-.41-.132.4-.347-.014a.197.197 0 00.132-.171c.088-.049.137-.117.147-.2.028-.074.005-.117-.079-.128l-.111-.043zM26.186 19.087a.757.757 0 00.205-.43l.044-.112.147.282a2.22 2.22 0 01-.683.89c-.387.317-.308.532.228.64.138.033.328-.02.577-.157l-.039.181-.312.293c-.543.063-.88-.108-1.02-.508a.532.532 0 01.146-.522c.254-.157.454-.303.595-.44l.112-.117zM22.91 19.931c-.024.591.117.986.43 1.173.234.161.415.307.532.443.127.157.117.24-.035.245-.18.014-.297.02-.36.014-.108 0-.24-.043-.4-.126l-.216-.186.123.015c.185.079.341.087.468.029.21-.088.044-.283-.503-.59a.778.778 0 01-.2-.303 1.275 1.275 0 00-.073-.294l-.015-.453-.044.273c-.21-.601-.293-1.142-.248-1.621l.2-.337-.02.606c.025.156.097.351.22.571.092.21.136.39.141.541zM24.746 17.377l.123.015c-.24.167-.318.338-.245.518l-.005.097c.04.274.225.43.552.48.341.004.536-.083.595-.28a.633.633 0 00-.024-.428l.175.136c.05.146.01.318-.107.503-.156.283-.356.396-.59.347l-.318-.098-.415-.65.01-.028c-.02-.225.063-.425.25-.611z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M25.41 21.099l-.371-.049c.058-.044.088-.107.078-.195l-.22-.089c-.01.079-.058.118-.14.103-.06 0-.118-.131-.167-.39l-.069-.22-.019-.2c.02-.21.058-.323.108-.346-.05.13.009.307.175.522.133.16.264.278.405.356.709.439 1.172.429 1.398-.015l-.1.249-.258.156-.239.03a5.54 5.54 0 01-.581.088zM26.348 19.898c.248-.298.366-.513.356-.65.053.245.068.483.035.708-.089.118-.157.175-.202.18-.106 0-.175-.038-.21-.116l.02-.122z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M24.087 21.568a.766.766 0 00-.273-.435c-.43-.323-.674-.6-.728-.84-.058-.132-.083-.303-.083-.518s-.02-.385-.054-.507l-.18-.425-.02-.2c.03-.185.097-.352.2-.503.083-.142.263-.347.542-.62l.333-.094c-.25.182-.445.425-.587.733-.132.269-.17.469-.117.601.122.346.171.625.151.835-.028.18-.01.39.064.64.069.308.215.536.435.688l.302.283c.108.108.167.21.172.298l.043.371a.197.197 0 01-.132.171l-.274-.043.069-.005.079-.035c.092-.068.111-.2.058-.395z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M24.404 17.339l.152.025-.05.048c-.067.06-.111.165-.136.332l.117.273.415.65.07.157c.053.131 0 .258-.162.39-.049.02-.259.141-.625.356-.171.107-.259.289-.254.547-.015.152-.01.278.009.377l-.083-.279-.025-.171.01.132-.018-.04c-.049-.19-.005-.385.141-.585l.527-.499c.108-.107.05-.282-.18-.527-.255-.273-.38-.464-.38-.571-.01-.132.146-.342.472-.615z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M24.624 17.91c-.073-.18.005-.351.245-.518l.287.088a.487.487 0 00-.141.264c-.049.176 0 .293.151.352.172.049.278.029.318-.064l.077-.195c.035.293-.092.434-.371.43-.264.024-.454-.098-.566-.357zM25.83 19.17a1.912 1.912 0 00-.742.317l-.083.127.01-.029c.034-.136.126-.259.283-.371.405-.264.63-.415.66-.444a.737.737 0 00.326-.484l.151.259-.044.112a1.95 1.95 0 01-.561.513zM24.659 20.957l.751.142.025.015c.259.058.522.013.795-.133l.259-.156-.352.474c-.233.097-.497.107-.79.033a1.656 1.656 0 01-.488-.228l-.2-.147z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M24.057 21.006l-.068-.156a1.431 1.431 0 01-.162-.645l.015-.029-.01-.132.025.171c-.005.064.03.175.093.333l.035.077c.175.415.575.703 1.2.869.264.089.527.084.777-.009-.26.219-.537.375-.835.473.05-.068.034-.142-.045-.214-.077-.074-.297-.215-.663-.43a1.398 1.398 0 01-.362-.308zM25.19 20.591c-.307-.186-.371-.514-.185-.977l.083-.127c.186-.14.435-.248.742-.317l.356-.083-.112.117-.313.132c-.346.117-.546.352-.6.693-.039.201.093.386.39.547.264.152.479.205.645.167l.156-.07.313-.292-.077.195c-.22.444-.69.454-1.398.015zM22.735 20.928a.766.766 0 00-.084-.357.51.51 0 01-.048-.278l.063-.395.01.453c.039.323.132.518.273.597.547.307.714.502.504.59-.128.058-.284.05-.47-.03l-.122-.014a2.683 2.683 0 01-.435-.528c.187.182.289.167.309-.038zM22.754 18.384l.015.458.049.113c-.172-.215-.236-.489-.19-.815l.404-.356c-.17.21-.263.41-.278.6zM25.781 18.569c.103-.088.185-.268.254-.541l.205.21c-.126.36-.371.54-.737.54l.278-.21z"
        fillRule="evenodd"
        fill="#4c5e8b"
      />
      <Path
        d="M20.258 22.5a1.833 1.833 0 00-1.449-.008 1.797 1.797 0 00-1.016 1.004 1.816 1.816 0 00-.012 1.449c.192.477.528.813 1.004 1.016.477.207.953.211 1.43.019a1.838 1.838 0 001.039-1.011c.203-.477.207-.953.016-1.43a1.842 1.842 0 00-1.012-1.039z"
        fillRule="evenodd"
        fill="url(#necklace_svg__az)"
        transform="matrix(1.25 0 0 -1.25 0 50)"
      />
      <G
        clipPath="url(#necklace_svg__aA)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__aB)"
          transform="scale(.47921 -.47921) rotate(21.949 148.395 68.795)">
          <Path
            d="M21.27 23.539a1.83 1.83 0 00-1.012-1.039 1.833 1.833 0 00-1.449-.008 1.797 1.797 0 00-1.016 1.004 1.816 1.816 0 00-.012 1.449c.192.477.528.813 1.004 1.016.477.207.953.211 1.43.019a1.826 1.826 0 001.039-1.011c.203-.477.207-.953.016-1.43z"
            fill="url(#necklace_svg__Z)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <G
        clipPath="url(#necklace_svg__aC)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__aD)"
          transform="matrix(.33797 -.33971 -.27041 -.32229 -299.64 -1964)">
          <Path
            d="M18.152 23.688a.268.268 0 00.051.187c.07.09.192.094.363.008.211-.121.372-.281.481-.481.109-.199.09-.328-.055-.39-.133-.067-.301-.016-.508.152-.191.164-.304.34-.332.524z"
            fill="url(#necklace_svg__ac)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <Path
        d="M23.589 23.926a2.28 2.28 0 01-1.265 1.299c-.6.254-1.205.259-1.817.01a2.248 2.248 0 01-1.268-1.255 2.273 2.273 0 01-.01-1.813 2.226 2.226 0 011.255-1.268 2.22 2.22 0 011.781-.025 2.286 2.286 0 011.3 1.265c.254.6.262 1.191.024 1.787z"
        fillRule="evenodd"
        fill="#79a9e1"
      />
      <Path
        d="M22.182 24.844c-.62-.167-1.02-.454-1.196-.869l-.02-.04c.118.196.279.358.484.484.254.122.396.191.435.205a.966.966 0 00.459.059c.292.078.556.063.791-.034l-.171.185a1.163 1.163 0 01-.782.01z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M21.015 20.855l.215-.143.176-.023c-.327.277-.488.484-.473.615 0 .107.127.297.38.576.225.239.283.415.176.523l-.361.336a.3.3 0 00-.162.161c-.146.2-.195.396-.141.591l.02.039-.015.025c0 .215.054.43.161.644-.238-.372-.351-.625-.341-.752-.04-.596.116-.962.473-1.098.18-.079.245-.181.19-.308a4.531 4.531 0 01-.332-.458c-.161-.197-.233-.308-.215-.348-.005-.044.079-.17.249-.38zM21.245 24.854c-.01-.089-.064-.192-.171-.298l.04-.015c.023-.01.005-.074-.059-.186.121.137.239.24.361.307.366.215.59.358.669.43.077.074.092.147.044.215l-.595.113.097-.41-.127.4-.352-.015a.205.205 0 00.137-.17.267.267 0 00.142-.2c.034-.074.004-.118-.074-.128l-.112-.043zM23.189 22.436a.76.76 0 00.205-.43l.043-.111.147.283c-.137.332-.367.63-.684.888-.385.318-.313.533.225.64.136.034.332-.02.581-.156l-.039.18-.312.294c-.543.064-.884-.108-1.021-.509-.054-.195-.005-.365.146-.521.255-.156.455-.304.596-.44l.113-.118zM19.907 23.281c-.025.592.122.987.43 1.177.24.156.415.303.537.44.127.16.117.238-.034.243-.181.015-.303.02-.366.015-.108 0-.239-.043-.397-.127l-.218-.185.121.015c.186.077.342.087.474.028.21-.087.04-.282-.503-.59a.709.709 0 01-.2-.303 1.242 1.242 0 00-.079-.293l-.01-.454-.043.273c-.21-.6-.293-1.143-.254-1.62l.2-.338-.014.605c.019.162.093.353.219.572.089.21.132.391.137.542zM21.744 20.727l.121.015c-.234.167-.318.337-.239.518l-.005.097c.039.274.225.435.547.48.342.01.542-.085.596-.28a.645.645 0 00-.02-.43l.171.138c.049.146.015.318-.107.508-.157.278-.352.395-.592.34l-.312-.097-.415-.648.01-.03c-.019-.22.064-.426.245-.61z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M22.407 24.449l-.366-.049c.059-.04.083-.107.078-.196l-.219-.088c-.015.078-.059.118-.143.103-.063 0-.117-.131-.166-.391l-.072-.22-.015-.2c.02-.21.053-.322.107-.347-.054.133.005.308.176.523.127.161.264.284.405.361.708.435 1.172.425 1.397-.019l-.103.249-.254.156-.238.029a5.929 5.929 0 01-.587.089zM23.345 23.247c.254-.298.371-.512.356-.65.059.244.069.484.039.71-.088.115-.156.174-.2.18-.107 0-.18-.04-.21-.118l.015-.122z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M21.089 24.918c-.054-.192-.142-.338-.279-.435-.429-.323-.669-.602-.727-.84-.054-.132-.078-.303-.078-.518s-.02-.381-.059-.507l-.181-.425-.014-.2c.029-.187.098-.353.2-.504.078-.141.259-.346.543-.62l.326-.093a1.918 1.918 0 00-.585.733c-.133.268-.166.468-.112.601.116.346.164.625.146.834-.03.181-.005.396.068.64.068.307.214.537.43.688l.307.284c.107.106.161.209.171.298l.044.371a.205.205 0 01-.137.17l-.268-.044.063-.005.078-.033c.094-.07.112-.2.064-.395z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M21.406 20.689l.152.028-.054.044c-.064.059-.113.166-.132.333l.117.273.415.65.063.155c.06.133.005.26-.156.392-.049.018-.259.141-.63.361-.17.102-.254.282-.249.541-.015.153-.015.279.01.376l-.082-.273-.03-.175.01.136-.015-.039c-.054-.195-.005-.391.141-.591l.523-.498c.107-.107.048-.283-.175-.527-.254-.274-.382-.464-.382-.571-.015-.132.147-.338.474-.615z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M21.626 21.26c-.079-.181.005-.351.239-.518l.289.088a.488.488 0 00-.138.264c-.048.176 0 .292.147.351.176.049.283.03.317-.064l.079-.195c.033.294-.088.435-.367.43-.268.024-.453-.097-.566-.356zM22.832 22.52c-.307.072-.557.175-.742.317l-.084.127.01-.029c.035-.138.128-.259.279-.371.41-.264.63-.415.664-.445a.722.722 0 00.322-.483l.157.259-.044.111a2.02 2.02 0 01-.561.514zM21.66 24.306l.747.143.03.013c.253.06.522.015.795-.13l.254-.157-.351.474a1.202 1.202 0 01-.791.033 1.588 1.588 0 01-.489-.23l-.195-.146z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M21.055 24.355l-.064-.156a1.422 1.422 0 01-.161-.644l.01-.025-.01-.136.03.175c-.005.059.024.171.093.327l.033.079c.177.415.577.703 1.197.869.268.087.527.082.78-.01-.258.22-.54.376-.834.474.049-.07.034-.137-.044-.215-.079-.073-.302-.215-.669-.43a1.39 1.39 0 01-.361-.308zM22.193 23.945c-.313-.19-.372-.517-.187-.981l.084-.126c.185-.143.435-.245.742-.318l.357-.084-.113.118-.312.131c-.352.123-.552.353-.605.694-.035.2.097.386.395.547.263.152.478.205.645.165l.156-.067.312-.294-.078.196c-.225.444-.689.454-1.397.019zM19.731 24.277a.661.661 0 00-.082-.356.545.545 0 01-.049-.278l.063-.395.01.453c.043.323.137.518.278.597.543.307.713.502.503.59-.126.058-.288.048-.474-.024l-.121-.02a2.634 2.634 0 01-.43-.528c.185.182.284.167.302-.038zM19.756 21.734l.009.458.05.118c-.171-.22-.23-.494-.186-.821l.4-.357c-.17.215-.264.41-.273.602zM22.784 21.919c.097-.088.18-.269.249-.542l.205.21c-.123.362-.367.542-.733.542l.279-.21z"
        fillRule="evenodd"
        fill="#4c5e8b"
      />
      <Path
        d="M17.859 19.82a1.826 1.826 0 00-1.453-.008 1.799 1.799 0 00-1.015 1.004 1.819 1.819 0 00-.008 1.45c.191.476.523.812 1.004 1.015.476.207.953.211 1.425.02a1.83 1.83 0 001.04-1.012c.203-.48.21-.953.019-1.43a1.848 1.848 0 00-1.012-1.039z"
        fillRule="evenodd"
        fill="url(#necklace_svg__aE)"
        transform="matrix(1.25 0 0 -1.25 0 50)"
      />
      <G
        clipPath="url(#necklace_svg__aF)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__aG)"
          transform="scale(.47921 -.47921) rotate(21.949 131.471 58.678)">
          <Path
            d="M18.871 20.859a1.824 1.824 0 00-1.012-1.039 1.826 1.826 0 00-1.453-.008 1.799 1.799 0 00-1.015 1.004 1.819 1.819 0 00-.008 1.45c.191.476.523.812 1.004 1.015.476.207.953.211 1.425.02a1.83 1.83 0 001.04-1.012c.203-.48.21-.953.019-1.43z"
            fill="url(#necklace_svg__Z)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <G
        clipPath="url(#necklace_svg__aH)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__aI)"
          transform="matrix(.33797 -.33971 -.27041 -.32229 -302.04 -1966.6)">
          <Path
            d="M15.75 21.008a.266.266 0 00.051.183c.07.094.195.098.367.008a1.22 1.22 0 00.477-.476c.109-.2.093-.328-.055-.391-.129-.066-.297-.016-.504.152-.195.164-.305.34-.336.524z"
            fill="url(#necklace_svg__ac)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <Path
        d="M20.136 26.225a2.27 2.27 0 01-1.263 1.3 2.268 2.268 0 01-1.813.009 2.226 2.226 0 01-1.269-1.255c-.258-.595-.258-1.201-.015-1.811a2.24 2.24 0 011.255-1.27 2.25 2.25 0 011.788-.024 2.28 2.28 0 011.299 1.265c.253.6.258 1.191.018 1.786z"
        fillRule="evenodd"
        fill="#79a9e1"
      />
      <Path
        d="M18.735 27.144c-.625-.166-1.025-.454-1.201-.869l-.014-.04c.111.196.272.356.482.484.25.122.397.19.43.21.133.049.284.069.464.054.294.077.556.063.791-.034l-.176.185a1.149 1.149 0 01-.776.01z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M17.564 23.154l.22-.142.17-.023c-.327.277-.483.482-.474.615 0 .107.128.297.381.576.23.239.289.415.182.522l-.367.337a.292.292 0 00-.161.161c-.143.2-.191.396-.143.591l.02.039-.01.025c0 .214.05.429.157.644-.234-.372-.352-.625-.342-.747-.038-.6.118-.967.474-1.103.185-.079.249-.182.19-.308a5.867 5.867 0 01-.332-.46c-.156-.195-.229-.307-.214-.346-.005-.044.077-.171.249-.381zM17.793 27.154c-.005-.089-.063-.192-.17-.299l.038-.014c.024-.01.01-.074-.054-.186.118.137.24.24.362.307.366.215.586.357.663.43.08.074.093.147.044.215l-.595.113.103-.41-.128.4-.351-.015a.194.194 0 00.132-.17c.088-.05.137-.118.147-.201.028-.073.005-.117-.079-.127l-.113-.043zM19.736 24.736a.738.738 0 00.205-.43l.044-.112.146.284a2.24 2.24 0 01-.679.888c-.385.318-.312.533.225.64.138.034.328-.015.577-.151l-.039.175-.313.294c-.537.062-.878-.108-1.02-.509a.53.53 0 01.147-.522c.253-.157.453-.303.595-.44l.112-.117zM16.46 25.581c-.025.592.117.987.43 1.177.234.156.415.302.532.44.127.16.117.238-.035.243-.175.015-.297.02-.36.015-.108 0-.24-.043-.4-.127l-.216-.185.123.019c.185.073.341.083.472.025.207-.088.04-.284-.507-.592a.732.732 0 01-.2-.302 1.242 1.242 0 00-.074-.293l-.009-.453-.048.272c-.21-.6-.294-1.142-.25-1.621l.2-.336-.02.605c.025.16.098.35.22.57.093.21.137.392.142.543zM18.296 23.027l.122.015c-.24.165-.318.337-.244.518l-.005.098c.039.273.225.433.552.478.342.009.537-.083.595-.278a.669.669 0 00-.018-.425l.17.132c.048.146.01.316-.108.508-.156.277-.351.395-.59.34l-.318-.097-.415-.648.01-.03c-.014-.22.063-.426.25-.61z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M18.96 26.747l-.371-.048c.064-.039.087-.108.079-.195l-.22-.088c-.01.078-.06.118-.142.103-.058 0-.117-.133-.166-.391l-.069-.22-.02-.2c.02-.21.059-.322.108-.347-.049.133.01.308.176.523.131.161.269.283.405.361.709.435 1.173.425 1.396-.02l-.097.25-.259.156-.239.029c-.253.049-.45.079-.581.087zM19.898 25.547c.248-.298.366-.513.356-.65.053.244.068.484.033.708-.087.117-.156.176-.2.181-.107 0-.174-.039-.21-.117l.02-.122z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M17.636 27.221a.752.752 0 00-.272-.438c-.43-.323-.674-.602-.728-.84-.053-.133-.083-.303-.083-.518s-.015-.381-.054-.507l-.18-.425-.02-.2a1.16 1.16 0 01.205-.504c.078-.141.258-.346.537-.62l.332-.093a1.82 1.82 0 00-.585.733c-.133.269-.172.469-.113.6.117.347.166.625.146.835-.029.181-.01.396.064.64.067.307.215.537.434.689l.303.282c.108.108.165.21.17.299l.045.371a.194.194 0 01-.132.17l-.274-.044.069-.005.078-.033c.093-.07.112-.2.058-.392z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M17.954 22.989l.151.028-.049.044c-.067.059-.112.171-.136.333l.117.273.416.65.067.155c.054.133 0 .26-.156.392a9.93 9.93 0 00-.629.361c-.171.102-.26.282-.255.541-.014.151-.009.279.01.376l-.082-.273-.025-.175.01.136-.02-.039c-.05-.195 0-.391.142-.591l.528-.498c.107-.107.048-.283-.182-.522-.253-.279-.381-.469-.381-.576-.009-.133.148-.338.474-.615z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M18.174 23.56c-.074-.181.005-.352.243-.517l.29.087a.482.482 0 00-.142.264c-.05.175.004.292.151.351.175.049.278.03.318-.064l.077-.195c.034.293-.092.435-.371.43-.264.024-.454-.097-.566-.356zM19.38 24.819c-.307.074-.556.176-.742.317l-.083.128.01-.029c.034-.137.126-.26.283-.371.405-.264.63-.415.658-.445a.729.729 0 00.328-.484l.151.259-.044.112a1.93 1.93 0 01-.561.513zM18.207 26.611l.753.137.025.015c.259.058.521.015.795-.132l.259-.156-.352.474a1.21 1.21 0 01-.79.033 1.543 1.543 0 01-.488-.23l-.202-.14z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M17.608 26.655l-.07-.156a1.36 1.36 0 01-.155-.644l.01-.025-.01-.136.025.175c0 .064.028.171.092.327l.034.079c.176.415.576.703 1.201.869.264.087.527.082.776-.01-.258.22-.536.376-.835.473.049-.068.035-.136-.043-.215-.078-.073-.298-.215-.664-.43a1.332 1.332 0 01-.362-.307zM18.74 26.245c-.307-.19-.371-.518-.185-.981l.083-.128c.186-.141.435-.244.742-.317l.356-.083-.112.118-.313.131c-.346.122-.546.352-.6.699-.038.195.093.381.39.541.264.152.479.206.645.166l.157-.067.312-.294-.079.195c-.218.45-.687.455-1.396.02zM16.284 26.578c-.005-.152-.029-.274-.083-.357a.545.545 0 01-.049-.278l.064-.395.009.453c.045.323.132.518.274.595.547.308.713.504.507.592-.131.058-.287.048-.472-.025l-.123-.02a2.674 2.674 0 01-.435-.527c.186.182.289.167.308-.038zM16.309 24.034l.01.459.049.117c-.172-.22-.235-.494-.192-.821l.407-.357c-.172.216-.264.416-.274.602zM19.331 24.219c.103-.088.185-.269.254-.543l.205.21c-.128.362-.371.543-.737.543l.278-.21z"
        fillRule="evenodd"
        fill="#4c5e8b"
      />
      <Path
        d="M15.098 17.98a1.814 1.814 0 00-1.45-.007 1.781 1.781 0 00-1.015 1.004 1.816 1.816 0 00-.012 1.449c.191.472.527.812 1.004 1.015a1.8 1.8 0 001.43.02 1.836 1.836 0 001.039-1.012c.203-.48.207-.953.015-1.429a1.816 1.816 0 00-1.011-1.04z"
        fillRule="evenodd"
        fill="url(#necklace_svg__aJ)"
        transform="matrix(1.25 0 0 -1.25 0 50)"
      />
      <G
        clipPath="url(#necklace_svg__aK)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__aL)"
          transform="scale(.47921 -.47921) rotate(21.949 118.691 45.748)">
          <Path
            d="M16.109 19.02a1.816 1.816 0 00-1.011-1.04 1.814 1.814 0 00-1.45-.007 1.781 1.781 0 00-1.015 1.004 1.816 1.816 0 00-.012 1.449c.191.476.527.812 1.004 1.015a1.8 1.8 0 001.43.02 1.824 1.824 0 001.039-1.012c.203-.48.207-.953.015-1.429z"
            fill="url(#necklace_svg__Z)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <G
        clipPath="url(#necklace_svg__aM)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__aN)"
          transform="matrix(.33797 -.33971 -.27041 -.32229 -304.8 -1968.5)">
          <Path
            d="M12.992 19.168a.27.27 0 00.051.184c.07.093.191.097.363.007.211-.117.371-.277.481-.476.109-.199.09-.328-.055-.391-.133-.066-.301-.015-.508.153-.191.164-.304.339-.332.523z"
            fill="url(#necklace_svg__ac)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <Path
        d="M15.753 28.691a2.283 2.283 0 01-1.56.928c-.638.093-1.224-.063-1.752-.459-.512-.381-.81-.894-.903-1.538a2.27 2.27 0 01.46-1.753 2.22 2.22 0 011.537-.903 2.24 2.24 0 011.734.439c.527.396.835.914.922 1.557a2.228 2.228 0 01-.438 1.73z"
        fillRule="evenodd"
        fill="#79a9e1"
      />
      <Path
        d="M14.16 29.219c-.556-.323-.869-.704-.932-1.153l-.005-.043c.058.22.17.42.337.596.215.185.336.287.366.312.111.083.254.142.429.175.264.147.522.2.776.167l-.219.136a1.162 1.162 0 01-.752-.19z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M14.063 25.059l.248-.074.171.015c-.386.185-.59.341-.614.474-.03.102.043.322.22.653.156.294.165.474.033.553l-.44.229a.303.303 0 00-.195.117c-.19.156-.287.333-.287.533l.004.038-.014.025a1.38 1.38 0 00-.015.664c-.131-.42-.176-.694-.136-.811.116-.59.36-.903.74-.941.197-.025.284-.113.264-.25a4.956 4.956 0 01-.2-.528c-.107-.229-.146-.356-.12-.39.008-.044.12-.146.34-.307zM13.253 28.985c.013-.089-.015-.201-.094-.333l.044-.005c.03-.004.025-.068-.004-.19.077.162.165.288.267.39.299.298.474.494.533.587.054.092.049.166-.014.215l-.606-.044.205-.371-.229.356-.332-.103a.214.214 0 00.17-.132.29.29 0 00.196-.156c.049-.063.034-.112-.044-.147l-.092-.067zM15.753 27.154a.737.737 0 00.307-.367l.073-.093.068.312c-.22.284-.512.514-.888.679-.454.21-.44.435.053.679.123.068.323.068.597 0l-.084.161-.376.205c-.542-.083-.825-.331-.854-.756 0-.2.092-.357.274-.469.287-.083.517-.171.687-.269l.143-.082zM12.369 27.119c-.182.566-.143.981.106 1.245.191.215.322.406.406.567.083.185.049.263-.097.224a3.008 3.008 0 01-.358-.078.897.897 0 01-.351-.23l-.161-.228.112.043c.161.122.313.17.449.152.225-.03.112-.264-.331-.699a.69.69 0 01-.113-.351 1.47 1.47 0 000-.298l.108-.445-.113.254c-.049-.635.01-1.176.176-1.63l.278-.274-.17.581c-.025.157 0 .362.062.61.03.225.03.41-.003.557zM14.8 25.128l.112.048c-.268.098-.39.239-.366.434l-.03.092c-.028.274.103.48.41.607.328.097.543.058.645-.113a.657.657 0 00.093-.42l.127.176c.01.152-.069.308-.23.46-.224.228-.444.287-.659.18l-.283-.176-.234-.737.019-.025c.04-.219.171-.395.396-.527z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M14.478 28.896l-.342-.146c.068-.025.112-.077.127-.166l-.19-.146c-.035.077-.088.097-.162.068-.063-.02-.083-.161-.063-.42l-.01-.235.035-.195c.072-.195.136-.297.195-.307-.083.112-.074.297.033.551.084.186.181.338.299.45.571.605 1.02.717 1.353.341l-.162.215-.288.088-.24-.034a6.072 6.072 0 01-.585-.064zM15.694 27.974c.321-.22.492-.396.512-.533-.01.249-.058.484-.146.694-.117.088-.196.126-.24.121-.102-.028-.161-.082-.17-.17l.044-.112z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M13.081 29.009c0-.2-.048-.367-.156-.494-.328-.424-.489-.756-.484-1-.019-.143 0-.313.059-.522.054-.205.077-.372.077-.504l-.067-.459.039-.2c.074-.166.181-.307.322-.43.113-.116.341-.269.684-.459l.341-.005a1.928 1.928 0 00-.756.558c-.196.224-.284.41-.264.546.024.371 0 .65-.073.845-.078.171-.113.38-.103.635-.01.318.069.576.24.781l.219.352c.079.13.107.243.094.332l-.06.37a.214.214 0 01-.17.133l-.254-.118.069.015.082-.015c.107-.044.161-.161.161-.361z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M14.482 25l.137.069-.059.029c-.077.038-.151.137-.214.288l.039.293.234.737.025.167c.019.14-.064.253-.254.336-.054.01-.289.069-.699.186-.195.054-.322.21-.385.459a1.233 1.233 0 00-.088.366l-.01-.289.02-.175-.025.132-.004-.04c0-.2.097-.375.287-.532l.635-.346c.132-.079.123-.259-.033-.552-.177-.332-.25-.552-.22-.654.023-.133.228-.289.615-.474z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M14.546 25.61c-.025-.195.098-.336.367-.434l.258.157a.494.494 0 00-.205.218c-.093.157-.073.284.054.382.156.092.264.097.321.015l.128-.167c-.044.293-.2.4-.464.323-.264-.049-.415-.21-.459-.494zM15.386 27.144c-.317-.015-.581.024-.796.112l-.118.098.02-.02c.068-.126.19-.22.367-.288.463-.151.712-.24.751-.258a.728.728 0 00.44-.382l.082.288-.072.094a2.09 2.09 0 01-.674.356zM13.789 28.565l.689.331.025.015c.228.127.497.152.8.083l.288-.088-.46.367a1.238 1.238 0 01-.776-.167 1.658 1.658 0 01-.41-.351l-.156-.19z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M13.199 28.457l-.025-.17a1.446 1.446 0 01.01-.665l.018-.025.025-.13-.02.174c-.018.059-.013.176.005.343l.016.082c.063.449.376.83.932 1.153.235.151.489.215.752.19a2.385 2.385 0 01-.927.24c.063-.049.068-.123.014-.215-.059-.093-.234-.289-.533-.587a1.39 1.39 0 01-.267-.39zM14.4 28.35c-.25-.264-.225-.596.072-.996l.118-.098c.215-.088.479-.127.796-.112l.366.01-.142.082-.331.049c-.372.025-.625.195-.763.512-.087.187-.01.397.24.63.215.21.405.323.576.323l.17-.02.377-.205-.127.166c-.332.377-.78.264-1.352-.341zM11.939 28.038a.729.729 0 00.014-.367.497.497 0 01.025-.283l.16-.367-.107.445c-.043.321-.005.536.113.649.444.435.556.669.331.699-.136.018-.287-.03-.449-.152l-.112-.043a2.75 2.75 0 01-.278-.625c.132.223.229.238.303.043zM12.617 25.586l-.107.444.019.128c-.106-.26-.098-.538.03-.84l.479-.24c-.22.16-.357.327-.42.508zM15.494 26.547c.121-.058.248-.21.385-.458l.141.259c-.21.312-.493.425-.849.332l.323-.133z"
        fillRule="evenodd"
        fill="#4c5e8b"
      />
      <Path
        d="M11.355 16.305c-.515-.075-.98.05-1.402.367a1.79 1.79 0 00-.723 1.23c-.074.516.051.985.368 1.403.304.41.718.652 1.23.722.516.075.977-.043 1.387-.351.422-.317.668-.731.738-1.246a1.782 1.782 0 00-.351-1.383 1.826 1.826 0 00-1.247-.742z"
        fillRule="evenodd"
        fill="url(#necklace_svg__aO)"
        transform="matrix(1.25 0 0 -1.25 0 50)"
      />
      <G
        clipPath="url(#necklace_svg__aP)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__aQ)"
          transform="matrix(.38296 -.288 -.288 -.38296 9.107 18.655)">
          <Path
            d="M12.602 17.047a1.826 1.826 0 00-1.247-.742c-.511-.075-.98.05-1.402.367a1.79 1.79 0 00-.723 1.23c-.074.516.051.985.368 1.403.304.41.718.652 1.23.722.516.075.977-.043 1.387-.351.422-.317.668-.731.738-1.246a1.782 1.782 0 00-.351-1.383z"
            fill="url(#necklace_svg__Z)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <G
        clipPath="url(#necklace_svg__aR)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__aS)"
          transform="matrix(.23854 -.41555 -.34456 -.24132 -811.56 -1819.6)">
          <Path
            d="M9.629 17.992c.012.07.043.129.098.168.089.07.207.043.351-.086.172-.168.285-.363.34-.586.055-.218.004-.34-.152-.363-.145-.031-.293.063-.45.277-.144.211-.207.407-.187.59z"
            fill="url(#necklace_svg__ac)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <Path
        d="M45.933 16.855a2.291 2.291 0 01-.444 1.759 2.29 2.29 0 01-1.568.912 2.228 2.228 0 01-1.723-.448 2.284 2.284 0 01-.92-1.563 2.23 2.23 0 01.45-1.729c.39-.517.903-.825 1.533-.913.655-.093 1.241.053 1.759.445.522.39.825.903.912 1.537z"
        fillRule="evenodd"
        fill="#79a9e1"
      />
      <Path
        d="M45.176 18.355c-.62.165-1.114.116-1.47-.156l-.034-.025c.196.112.416.171.66.176.278-.02.438-.03.478-.035.136-.019.277-.083.429-.185.288-.079.513-.22.665-.425l-.054.249a1.216 1.216 0 01-.674.401z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M42.168 15.484l.122-.23.133-.113c-.143.406-.177.66-.1.771.05.094.26.197.617.31.316.092.454.213.415.36l-.147.474a.305.305 0 00-.058.224c-.025.245.034.435.175.576l.035.03v.029c.106.185.263.346.464.479-.397-.205-.617-.366-.674-.479-.333-.498-.381-.894-.138-1.191.118-.157.123-.279.005-.367a4.207 4.207 0 01-.512-.23c-.235-.087-.356-.15-.361-.19-.025-.033-.015-.185.023-.453zM44.37 18.828c-.054-.073-.151-.127-.297-.165l.023-.035c.02-.024-.028-.068-.136-.132.166.054.323.083.464.083.425 0 .689.015.791.04.107.023.151.077.146.16l-.458.401-.118-.41.088.41-.313.166a.195.195 0 00.03-.215c.049-.088.059-.171.029-.245-.014-.077-.054-.102-.131-.072l-.118.013zM44.844 15.766a.787.787 0 00-.039-.479l-.02-.116.269.175c.048.353 0 .723-.147 1.109-.176.469 0 .615.518.44.136-.04.277-.181.425-.42l.054.17-.123.411c-.44.326-.82.346-1.137.073a.52.52 0 01-.138-.528c.143-.263.245-.487.299-.678l.039-.157zM42.426 18.135c.274.527.597.796.958.805.289.02.512.059.684.112.19.074.225.152.092.23a2.712 2.712 0 01-.307.195c-.093.054-.23.083-.41.088l-.28-.049.113-.048c.2-.03.343-.098.425-.21.137-.18-.107-.27-.732-.26a.709.709 0 01-.323-.165 1.232 1.232 0 00-.215-.214l-.233-.387.097.254c-.484-.415-.825-.84-1.03-1.274l.005-.396.288.538c.097.126.258.254.478.385.18.137.308.269.39.396zM42.739 15.005l.112-.044c-.121.259-.107.449.049.567l.044.087c.171.215.411.264.718.138.298-.162.426-.343.376-.538a.635.635 0 00-.234-.356l.22.029c.112.102.166.268.156.488.01.323-.107.523-.338.595l-.322.074-.688-.356v-.03c-.127-.18-.16-.4-.093-.654z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M45.176 17.9l-.347.138c.035-.064.025-.133-.029-.206l-.235.034c.03.074.005.128-.068.162-.058.023-.17-.06-.342-.26l-.17-.155-.113-.167c-.088-.185-.117-.302-.083-.351.02.141.156.264.415.366.191.073.366.113.527.108.835.024 1.231-.215 1.201-.714l.04.264-.147.264-.19.146a6.344 6.344 0 01-.459.371zM45.386 16.386c.068-.38.063-.625-.015-.736.171.18.298.38.385.595-.019.141-.049.23-.087.254-.093.054-.172.054-.239 0l-.044-.113z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M44.267 18.965a.771.771 0 00-.458-.24c-.533-.063-.884-.185-1.05-.361a1.488 1.488 0 01-.333-.41 1.722 1.722 0 00-.297-.41l-.372-.279-.117-.165a1.272 1.272 0 01-.073-.537c-.005-.162.05-.43.157-.807l.238-.243c-.12.278-.17.586-.14.922.024.304.087.494.2.581.278.24.458.459.547.645.062.177.19.347.375.523.215.234.455.361.723.381l.406.098c.146.038.243.092.297.165l.22.303a.195.195 0 01-.03.215l-.259.098.059-.04.049-.068c.049-.107 0-.23-.141-.371z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M42.422 15.141l.147-.049-.02.064c-.029.083-.015.2.048.356l.235.177.688.356.137.102c.113.083.132.225.06.415a10.22 10.22 0 00-.367.625c-.098.177-.079.377.054.6.062.138.126.245.195.318l-.21-.195-.108-.136.074.112-.03-.03c-.141-.141-.2-.331-.175-.576l.205-.698c.039-.147-.099-.268-.415-.36-.357-.113-.568-.216-.616-.31-.078-.11-.044-.365.098-.77z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M42.9 15.528c-.156-.118-.17-.308-.049-.567l.294-.073a.464.464 0 00.014.302c.044.176.142.25.304.23.175-.044.253-.117.238-.215l-.028-.21c.175.24.14.425-.104.561-.219.152-.439.143-.669-.028zM44.575 16.015c-.234.215-.395.43-.484.645l-.009.151-.005-.028c-.04-.133-.02-.29.06-.46.218-.434.335-.673.35-.718a.73.73 0 00.04-.58l.258.146.02.117c-.04.288-.117.532-.23.727zM44.453 18.154l.723-.254.029-.005c.249-.077.459-.249.62-.512l.146-.264-.067.586c-.152.205-.377.346-.665.425a1.54 1.54 0 01-.541.049l-.245-.025z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M43.96 18.496l-.136-.102a1.432 1.432 0 01-.464-.479l-.005-.029-.074-.112.108.136c.029.054.112.138.249.24l.068.049c.357.272.85.321 1.47.156.278-.064.498-.196.674-.401a2.564 2.564 0 01-.489.825c.005-.083-.038-.137-.146-.16-.103-.025-.366-.04-.791-.04-.141 0-.298-.029-.464-.083zM44.731 17.569c-.361-.01-.581-.259-.649-.758l.01-.151c.088-.215.25-.43.483-.645l.269-.249-.039.157-.205.273c-.245.274-.303.577-.176.904.068.19.273.283.615.273.302 0 .517-.063.64-.18l.102-.137.123-.411.028.21c.03.499-.366.738-1.2.714zM42.774 19.087a.757.757 0 00-.254-.268.597.597 0 01-.181-.215l-.141-.377.233.392c.2.258.377.38.538.38.625-.01.869.078.732.258-.082.113-.225.182-.42.21l-.117.05a2.867 2.867 0 01-.639-.245c.254.064.331.005.249-.185zM41.519 16.875l.239.39.102.074c-.259-.103-.449-.308-.571-.615l.166-.508c-.039.269-.02.488.064.659zM44.234 15.523c.043-.128.023-.328-.054-.6l.283.082c.073.371-.05.654-.367.84l.138-.323z"
        fillRule="evenodd"
        fill="#4c5e8b"
      />
      <Path
        d="M36.391 25.109a1.832 1.832 0 00-1.254-.73 1.782 1.782 0 00-1.379.359c-.418.313-.66.731-.735 1.25-.074.508.047.969.36 1.383.312.414.722.66 1.226.731.524.074.993-.043 1.407-.356.418-.312.66-.723.73-1.23a1.833 1.833 0 00-.355-1.407z"
        fillRule="evenodd"
        fill="url(#necklace_svg__aT)"
        transform="matrix(1.25 0 0 -1.25 0 50)"
      />
      <G
        clipPath="url(#necklace_svg__aU)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__aV)"
          transform="matrix(.47448 .0672 .0672 -.47448 33.136 25.183)">
          <Path
            d="M36.746 26.516a1.833 1.833 0 00-.355-1.407 1.832 1.832 0 00-1.254-.73 1.782 1.782 0 00-1.379.359c-.418.313-.66.731-.735 1.25-.074.508.047.969.36 1.383.312.414.722.66 1.226.731.524.074.993-.043 1.407-.356.418-.312.66-.723.73-1.23z"
            fill="url(#necklace_svg__Z)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <G
        clipPath="url(#necklace_svg__aW)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__aX)"
          transform="matrix(.46256 -.12513 -.07297 -.41433 752.91 -1855)">
          <Path
            d="M33.973 25.082a.275.275 0 00-.051.188c.016.117.121.179.312.191.243 0 .461-.059.653-.176.195-.117.246-.238.148-.367-.078-.121-.25-.164-.512-.121-.25.047-.433.141-.55.285z"
            fill="url(#necklace_svg__ac)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <Path
        d="M46.186 21.724a2.267 2.267 0 01-1.263 1.299 2.294 2.294 0 01-1.813.015 2.248 2.248 0 01-1.269-1.255 2.282 2.282 0 01-.015-1.817 2.254 2.254 0 011.255-1.27 2.25 2.25 0 011.788-.023c.61.248 1.044.668 1.299 1.268.253.597.258 1.192.018 1.783z"
        fillRule="evenodd"
        fill="#79a9e1"
      />
      <Path
        d="M44.785 22.646c-.625-.166-1.025-.458-1.201-.873l-.015-.04c.112.196.273.362.483.488.25.123.397.192.43.205.132.054.283.069.464.059.293.074.557.059.792-.039l-.177.19a1.164 1.164 0 01-.776.01z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M43.614 18.652l.218-.137.172-.029c-.328.279-.484.484-.474.615 0 .108.127.303.386.577.224.24.283.415.175.522l-.366.338a.286.286 0 00-.16.16c-.143.2-.191.396-.143.59l.02.04-.01.03c0 .215.05.43.157.645-.234-.377-.347-.625-.342-.753-.04-.596.117-.963.474-1.099.185-.077.249-.18.19-.312a5.77 5.77 0 01-.332-.459c-.157-.19-.229-.307-.215-.342-.004-.044.078-.175.25-.385zM43.843 22.651c-.006-.087-.064-.185-.17-.292l.038-.02c.024-.01.01-.069-.053-.18a1.6 1.6 0 00.36.307c.367.21.587.351.664.429.08.074.093.143.044.21l-.595.117.103-.415-.128.4-.351-.008a.208.208 0 00.131-.172c.089-.053.138-.122.148-.2.029-.073.004-.117-.079-.132l-.112-.044zM45.786 20.239a.768.768 0 00.205-.434l.049-.112.141.287a2.227 2.227 0 01-.679.884c-.385.322-.312.532.225.645.137.028.333-.02.577-.157l-.039.177-.313.297c-.537.059-.878-.112-1.02-.512a.534.534 0 01.145-.523 3.06 3.06 0 00.597-.435l.112-.117zM42.51 21.079c-.025.596.118.986.43 1.177.234.161.415.308.531.439.128.161.118.245-.033.245a5.22 5.22 0 01-.362.019c-.107 0-.238-.044-.4-.132l-.215-.186.122.02c.186.074.342.083.473.029.205-.088.04-.288-.507-.59a.744.744 0 01-.2-.308 1.291 1.291 0 00-.074-.288l-.01-.459-.049.274c-.21-.602-.292-1.138-.248-1.617l.2-.342-.02.606c.025.161.098.351.22.576.093.205.137.385.142.537zM44.346 18.525l.122.02c-.24.161-.318.332-.24.517l-.01.093c.044.274.226.435.552.479.343.01.537-.083.596-.274a.673.673 0 00-.02-.429l.172.131c.048.152.01.318-.108.508-.156.284-.351.396-.591.343l-.317-.094-.415-.654.01-.025a.773.773 0 01.25-.615z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M45.01 22.251l-.371-.054c.063-.038.087-.102.077-.195l-.218-.088c-.01.083-.06.117-.143.107-.057-.005-.116-.136-.165-.39l-.069-.225-.02-.2c.02-.205.059-.322.108-.342-.049.127.01.303.176.522.131.161.269.279.405.358.708.433 1.176.428 1.396-.02l-.097.248-.259.157-.239.033c-.253.05-.45.08-.581.09zM45.948 21.045c.248-.293.366-.508.356-.645.054.245.069.479.034.709-.088.112-.157.17-.2.175-.108 0-.175-.039-.21-.117l.02-.122z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M43.691 22.72a.768.768 0 00-.278-.435c-.43-.323-.674-.605-.728-.84-.054-.131-.083-.302-.083-.517s-.014-.385-.053-.508l-.18-.43-.02-.2c.033-.18.097-.346.205-.497.077-.143.258-.353.537-.625l.331-.094a1.829 1.829 0 00-.585.732c-.132.274-.17.469-.112.602.116.35.165.63.146.835-.03.18-.01.395.064.638.067.309.215.538.434.694l.303.284c.107.107.166.205.17.292l.044.377a.208.208 0 01-.131.17l-.274-.044.069-.004.078-.035c.093-.072.112-.205.063-.395z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M44.004 18.486l.151.029-.049.045c-.068.059-.112.17-.136.331l.118.274.415.654.067.156c.054.128 0 .26-.156.386-.054.025-.264.147-.63.362-.17.102-.259.283-.254.547-.015.151-.01.273.01.37l-.082-.273-.025-.17.01.13-.02-.038c-.05-.195 0-.39.142-.59l.526-.499c.108-.107.049-.283-.18-.522-.254-.274-.381-.47-.381-.577-.01-.131.146-.336.474-.615z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M44.229 19.063c-.079-.185 0-.357.239-.518l.288.083a.494.494 0 00-.142.268c-.049.172.005.289.151.352.176.05.279.025.318-.068l.078-.195c.034.293-.092.439-.366.434-.269.02-.459-.098-.566-.356zM45.43 20.322a1.94 1.94 0 00-.742.313l-.083.126.014-.024c.03-.137.122-.263.278-.37.406-.27.63-.416.66-.445a.735.735 0 00.327-.483l.156.253-.049.113c-.176.229-.366.4-.561.517zM44.258 22.11l.752.141.024.01c.258.058.522.014.796-.132l.259-.157-.352.474a1.233 1.233 0 01-.79.039 1.663 1.663 0 01-.49-.229l-.2-.146z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M43.657 22.159l-.068-.156a1.362 1.362 0 01-.157-.645l.01-.03-.01-.132.025.171c0 .064.03.17.093.327l.034.079c.176.415.576.707 1.201.873.264.084.527.084.776-.01a2.527 2.527 0 01-.835.469c.049-.068.035-.136-.044-.21-.077-.077-.297-.219-.663-.429a1.6 1.6 0 01-.362-.307zM44.79 21.744c-.307-.192-.371-.519-.185-.983l.083-.126a1.94 1.94 0 01.742-.313l.356-.083-.112.117-.313.133c-.346.116-.546.346-.6.692-.04.2.093.381.39.548.264.146.479.2.65.161l.152-.064.312-.297-.079.195c-.22.448-.688.453-1.396.02zM42.334 22.075a.724.724 0 00-.083-.356.543.543 0 01-.049-.279l.063-.395.01.459c.044.317.132.517.274.596.547.302.712.503.507.59-.131.054-.287.045-.474-.029l-.12-.02a2.639 2.639 0 01-.436-.527c.186.181.289.171.308-.039zM42.359 19.536l.01.454.048.118c-.17-.22-.235-.494-.19-.82l.404-.353c-.17.21-.262.411-.272.601zM45.381 19.721c.103-.087.185-.272.254-.546l.205.215c-.123.356-.371.536-.738.541l.28-.21z"
        fillRule="evenodd"
        fill="#4c5e8b"
      />
      <Path
        d="M35.938 21.582a1.835 1.835 0 00-1.45-.012 1.799 1.799 0 00-1.015 1.004 1.826 1.826 0 00-.012 1.453c.191.473.527.813 1.004 1.016a1.8 1.8 0 001.43.019 1.844 1.844 0 001.039-1.015 1.79 1.79 0 00.015-1.426 1.814 1.814 0 00-1.011-1.039z"
        fillRule="evenodd"
        fill="url(#necklace_svg__aY)"
        transform="matrix(1.25 0 0 -1.25 0 50)"
      />
      <G
        clipPath="url(#necklace_svg__aZ)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__ba)"
          transform="scale(.47921 -.47921) rotate(21.949 159.805 154.122)">
          <Path
            d="M36.949 22.621a1.814 1.814 0 00-1.011-1.039 1.835 1.835 0 00-1.45-.012 1.799 1.799 0 00-1.015 1.004 1.826 1.826 0 00-.012 1.453c.191.473.527.813 1.004 1.016a1.8 1.8 0 001.43.019 1.835 1.835 0 001.039-1.015 1.79 1.79 0 00.015-1.426z"
            fill="url(#necklace_svg__Z)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <G
        clipPath="url(#necklace_svg__bb)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__bc)"
          transform="matrix(.33797 -.33971 -.27041 -.32229 -283.96 -1964.9)">
          <Path
            d="M33.832 22.766a.284.284 0 00.051.187c.07.09.191.094.363.008.211-.121.371-.277.481-.477.109-.199.089-.328-.055-.39-.133-.071-.301-.02-.508.152-.191.164-.305.336-.332.52z"
            fill="url(#necklace_svg__ac)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <Path
        d="M44.688 25.922a2.266 2.266 0 01-1.266 1.3 2.291 2.291 0 01-1.81.014 2.246 2.246 0 01-1.275-1.255 2.272 2.272 0 01-.01-1.816 2.243 2.243 0 011.256-1.27 2.268 2.268 0 011.786-.024c.611.249 1.04.669 1.294 1.269.26.596.263 1.192.025 1.782z"
        fillRule="evenodd"
        fill="#79a9e1"
      />
      <Path
        d="M43.286 26.846c-.625-.166-1.025-.46-1.201-.875l-.015-.038c.112.2.274.36.479.488.253.122.4.19.435.205.131.054.282.073.463.059.293.073.557.063.792-.04l-.177.191a1.18 1.18 0 01-.776.01z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M42.114 22.851l.22-.136.171-.03c-.328.279-.484.484-.474.621 0 .106.128.298.382.571.228.244.287.415.18.523l-.367.341a.264.264 0 00-.161.161c-.146.195-.19.395-.141.587l.02.038-.015.03c0 .214.053.43.161.644-.235-.376-.351-.625-.343-.752-.038-.595.118-.962.474-1.099.182-.078.245-.18.192-.313a6.14 6.14 0 01-.333-.453c-.156-.195-.23-.313-.215-.347-.005-.043.079-.17.249-.386zM42.344 26.85c-.005-.088-.064-.185-.172-.293l.04-.014c.024-.014.01-.073-.053-.185.116.13.238.233.361.307.366.21.585.356.664.43.077.073.092.146.043.21l-.596.118.104-.412-.133.397-.346-.01a.207.207 0 00.132-.172c.087-.053.132-.116.146-.2.03-.073.005-.117-.078-.126l-.112-.05zM44.288 24.439a.776.776 0 00.205-.435l.043-.113.147.289c-.137.331-.362.63-.684.889-.385.317-.308.527.23.639.136.035.327-.02.576-.157l-.04.182-.313.292c-.54.059-.878-.107-1.02-.507a.508.508 0 01.147-.523c.253-.156.455-.302.596-.439l.112-.117zM41.006 25.284c-.02.59.122.981.434 1.171.235.161.415.308.533.44.127.161.117.244-.034.244a3.371 3.371 0 01-.361.02c-.108 0-.245-.045-.402-.133l-.213-.18.12.014c.182.074.343.084.47.03.21-.089.038-.284-.503-.591a.697.697 0 01-.2-.308 1.277 1.277 0 00-.079-.288l-.01-.454-.043.269c-.21-.6-.293-1.138-.25-1.617l.2-.341-.018.61c.019.156.098.346.219.571.089.21.137.387.137.543zM42.846 22.73l.123.014c-.239.161-.318.337-.244.517l-.005.094c.039.273.224.434.551.478.338.01.538-.083.597-.273a.644.644 0 00-.026-.43l.177.136c.044.147.01.318-.108.504-.156.283-.356.395-.591.341l-.318-.092-.415-.655.01-.024c-.02-.225.064-.43.25-.61z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M43.511 26.45l-.371-.054c.059-.039.087-.102.077-.19l-.22-.092c-.008.082-.057.116-.14.107-.065-.005-.118-.132-.167-.391l-.068-.225-.02-.2c.02-.205.06-.323.108-.341-.054.126.005.302.176.522.131.162.264.278.405.357.708.434 1.172.43 1.397-.02l-.098.253-.259.152-.24.035a5.575 5.575 0 01-.58.087zM44.444 25.244c.253-.293.371-.508.361-.644.054.244.068.477.034.707-.088.113-.157.177-.2.177-.108 0-.177-.04-.21-.118l.015-.122z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M42.188 26.919a.718.718 0 00-.28-.434c-.423-.323-.668-.606-.722-.84-.058-.133-.082-.304-.082-.517 0-.215-.02-.387-.054-.51l-.181-.428-.019-.201c.029-.18.098-.347.2-.498.078-.141.259-.346.541-.625l.328-.092c-.244.18-.439.425-.586.732-.127.273-.165.474-.112.6.117.352.17.63.152.835-.035.182-.01.397.062.64.069.308.215.542.43.694l.307.283c.108.107.167.205.172.292l.043.376a.207.207 0 01-.13.172l-.274-.044.063-.005.078-.034c.097-.069.117-.201.063-.396z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M42.505 22.685l.151.03-.049.044c-.068.058-.112.171-.136.337l.117.268.414.655.064.156c.059.126.005.259-.156.385-.049.025-.259.147-.63.362-.17.103-.254.283-.249.547-.015.151-.01.273.01.376l-.084-.279-.028-.171.015.133-.02-.04c-.049-.19-.005-.39.141-.585l.522-.503c.108-.107.05-.279-.175-.522-.253-.274-.38-.466-.38-.572-.01-.137.145-.342.473-.621z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M42.725 23.261c-.074-.18.005-.356.244-.517l.287.084a.515.515 0 00-.141.268c-.049.175 0 .288.151.352.172.048.279.023.318-.07l.078-.194c.03.292-.093.439-.37.435-.265.019-.455-.099-.567-.358zM43.931 24.521a1.97 1.97 0 00-.742.313l-.084.132.01-.03a.669.669 0 01.279-.371c.41-.268.63-.415.664-.444a.735.735 0 00.327-.483l.151.253-.043.113c-.177.23-.367.4-.562.517zM42.759 26.309l.752.141.024.01c.254.059.522.02.796-.133l.259-.15-.351.468c-.235.103-.499.112-.792.04a1.652 1.652 0 01-.488-.23l-.2-.146z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M42.159 26.357l-.069-.156a1.431 1.431 0 01-.161-.645l.015-.029-.015-.132.028.171c-.005.064.03.172.094.328l.034.077c.176.415.576.709 1.201.875.264.083.523.083.776-.01a2.452 2.452 0 01-.835.469c.05-.064.034-.138-.043-.21-.079-.074-.298-.22-.664-.43a1.573 1.573 0 01-.361-.307zM43.291 25.943c-.307-.19-.371-.518-.186-.977l.084-.132a1.97 1.97 0 01.742-.313l.357-.082-.113.117-.312.132c-.348.117-.548.346-.602.693-.038.2.094.38.392.547.263.146.478.205.645.16l.155-.063.312-.292-.077.19c-.225.45-.69.455-1.397.02zM40.835 26.275a.79.79 0 00-.083-.357.495.495 0 01-.05-.278l.06-.391.01.453c.043.318.137.52.278.597.546.307.713.502.503.591-.127.054-.283.044-.47-.03l-.12-.014a2.843 2.843 0 01-.436-.532c.185.18.288.171.308-.039zM40.855 23.735l.009.455.053.116c-.17-.219-.233-.492-.19-.815l.4-.356c-.165.21-.258.41-.272.6zM43.881 23.921c.104-.088.186-.268.255-.547l.205.215c-.127.356-.371.542-.737.542l.277-.21z"
        fillRule="evenodd"
        fill="#4c5e8b"
      />
      <Path
        d="M34.738 18.223a1.833 1.833 0 00-1.449-.012 1.797 1.797 0 00-1.019 1.004c-.204.48-.208.961-.008 1.453.191.473.523.812 1.004 1.016.476.203.953.207 1.429.019a1.823 1.823 0 001.035-1.015c.208-.477.211-.954.02-1.426a1.821 1.821 0 00-1.012-1.039z"
        fillRule="evenodd"
        fill="url(#necklace_svg__bd)"
        transform="matrix(1.25 0 0 -1.25 0 50)"
      />
      <G
        clipPath="url(#necklace_svg__be)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__bf)"
          transform="scale(.47921 -.47921) rotate(21.949 140.475 151.17)">
          <Path
            d="M35.75 19.262a1.813 1.813 0 00-1.012-1.039 1.833 1.833 0 00-1.449-.012 1.797 1.797 0 00-1.019 1.004c-.204.48-.208.961-.008 1.453.191.473.523.812 1.004 1.016.476.203.953.207 1.429.019a1.823 1.823 0 001.035-1.015c.208-.477.211-.954.02-1.426z"
            fill="url(#necklace_svg__Z)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <G
        clipPath="url(#necklace_svg__bg)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__bh)"
          transform="matrix(.33797 -.33971 -.27041 -.32229 -285.16 -1968.2)">
          <Path
            d="M32.633 19.406a.283.283 0 00.047.188c.074.09.195.094.367.008a1.23 1.23 0 00.48-.477c.11-.199.09-.332-.054-.395-.133-.066-.301-.015-.508.157-.192.16-.305.336-.332.519z"
            fill="url(#necklace_svg__ac)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <Path
        d="M42.436 30.128a2.259 2.259 0 01-1.263 1.293c-.597.259-1.202.259-1.813.014a2.243 2.243 0 01-1.269-1.254c-.258-.601-.258-1.201-.015-1.812a2.25 2.25 0 011.255-1.274 2.255 2.255 0 011.788-.02 2.27 2.27 0 011.299 1.265 2.25 2.25 0 01.018 1.788z"
        fillRule="evenodd"
        fill="#79a9e1"
      />
      <Path
        d="M41.035 31.045c-.625-.166-1.025-.454-1.201-.869l-.015-.04c.112.197.273.358.483.484.25.123.397.19.43.205a.988.988 0 00.464.059c.293.074.557.064.792-.039l-.177.19a1.18 1.18 0 01-.776.01z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M39.864 27.056l.218-.142.172-.024c-.328.273-.484.479-.474.615 0 .107.127.297.386.571.224.244.283.415.175.523l-.366.341a.293.293 0 00-.16.161c-.143.2-.191.396-.143.586l.02.04-.01.03c0 .214.05.428.157.643-.234-.375-.347-.625-.342-.751-.04-.597.117-.963.474-1.099.185-.079.249-.181.19-.313a5.739 5.739 0 01-.332-.453c-.157-.196-.229-.309-.215-.348-.004-.043.078-.171.25-.38zM40.093 31.055c-.006-.092-.064-.191-.17-.299l.038-.013c.024-.015.01-.074-.053-.187.117.138.238.24.36.308.367.21.587.357.664.43.08.073.093.146.044.21l-.595.117.103-.41-.128.4-.351-.015c.077-.034.122-.087.131-.17.089-.054.138-.117.148-.201.029-.073.004-.116-.079-.126l-.112-.044zM42.036 28.637a.753.753 0 00.205-.435l.049-.106.141.283a2.24 2.24 0 01-.679.888c-.385.318-.312.533.225.64.137.034.333-.02.577-.156l-.039.18-.313.294c-.537.059-.878-.108-1.02-.509a.53.53 0 01.145-.522c.26-.157.455-.303.597-.439l.112-.117zM38.76 29.482c-.025.592.117.982.43 1.172.234.161.415.308.531.445.128.156.118.238-.033.243-.177.015-.298.02-.362.015-.107 0-.238-.043-.4-.132l-.215-.18.122.015c.186.073.342.088.473.029.205-.088.04-.283-.507-.592a.744.744 0 01-.2-.307 1.261 1.261 0 00-.074-.288l-.01-.453-.049.272c-.21-.605-.292-1.142-.248-1.621l.2-.336-.02.605c.025.156.098.347.22.571.093.21.137.391.142.542zM40.596 26.929l.122.015c-.24.166-.318.336-.24.517l-.01.093c.044.279.226.435.552.484.343.005.537-.09.596-.28a.677.677 0 00-.02-.43l.172.138c.048.147.01.318-.108.503-.156.284-.351.395-.591.346l-.317-.097-.415-.65.01-.03c-.015-.223.063-.424.25-.61z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M41.26 30.65l-.371-.05c.063-.044.087-.106.077-.195l-.218-.093c-.01.083-.06.118-.143.108-.057-.005-.116-.133-.165-.391l-.069-.219-.02-.2c.02-.21.059-.323.108-.348-.049.133.01.303.176.523.131.161.269.279.405.356.708.44 1.176.43 1.396-.018l-.097.253-.259.151-.239.034c-.253.049-.45.079-.581.089zM42.198 29.444c.248-.294.366-.509.356-.645.054.244.069.479.034.707-.088.118-.157.177-.2.177-.108 0-.175-.04-.21-.118l.02-.121z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M39.941 31.119a.781.781 0 00-.279-.435c-.428-.323-.673-.607-.727-.84-.054-.132-.083-.303-.083-.518s-.015-.386-.053-.507l-.18-.43-.02-.2c.033-.181.097-.348.205-.499.077-.141.258-.346.537-.62l.331-.098a1.88 1.88 0 00-.585.738c-.132.269-.17.469-.112.596.116.352.165.629.146.834-.03.186-.01.396.064.64.067.307.215.542.434.694l.303.282c.107.108.165.207.17.299l.044.371c-.009.083-.054.137-.131.17l-.274-.043.069-.005.077-.034c.094-.069.113-.2.064-.395z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M40.254 26.89l.151.024-.049.043c-.068.06-.112.172-.136.338l.118.274.415.648.067.157c.054.132 0 .258-.156.391-.054.019-.264.141-.63.356-.17.108-.259.288-.254.546-.015.152-.01.274.01.377l-.082-.279-.025-.17.01.131-.02-.039c-.05-.19 0-.386.142-.586l.526-.502c.108-.108.049-.279-.18-.523-.254-.274-.381-.464-.381-.571-.01-.136.146-.343.474-.615z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M40.479 27.461c-.079-.181 0-.351.239-.517l.288.082a.528.528 0 00-.142.269c-.049.176.005.293.151.351.176.049.279.025.318-.068l.078-.19c.034.288-.092.434-.366.43-.269.023-.459-.098-.566-.357zM41.68 28.721a1.885 1.885 0 00-.742.317l-.083.127.014-.029c.03-.137.122-.258.278-.371.406-.269.63-.415.66-.445a.73.73 0 00.327-.482l.156.258-.049.107c-.176.23-.366.406-.561.518zM40.508 30.508l.752.142.024.009c.258.063.522.02.796-.132l.259-.15-.352.468c-.235.102-.498.112-.79.039a1.667 1.667 0 01-.49-.23l-.2-.147z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M39.907 30.556l-.068-.156a1.357 1.357 0 01-.157-.644l.01-.03-.01-.131.025.17c0 .064.03.176.093.332l.034.08c.176.414.576.702 1.201.868.264.082.527.082.776-.01a2.36 2.36 0 01-.835.469c.049-.064.035-.137-.044-.21-.077-.073-.297-.22-.663-.43a1.332 1.332 0 01-.362-.308zM41.04 30.141c-.307-.19-.371-.512-.185-.976l.083-.128c.184-.14.434-.248.742-.316l.356-.084-.112.118-.313.131c-.346.118-.546.353-.6.694-.04.2.093.381.39.548.264.15.479.205.65.16l.152-.063.312-.294-.079.192c-.22.448-.688.458-1.396.018zM38.584 30.479c-.005-.157-.029-.274-.083-.357a.56.56 0 01-.048-.278l.062-.395.01.453c.044.323.133.518.274.595.547.31.712.504.507.592-.131.058-.287.048-.473-.029l-.122-.015a2.803 2.803 0 01-.435-.533c.186.187.289.172.308-.033zM38.609 27.935l.01.454.048.117c-.17-.22-.235-.489-.19-.816l.404-.356c-.17.21-.262.41-.272.601zM41.631 28.12c.103-.088.185-.269.254-.543l.205.21c-.123.358-.371.543-.738.543l.28-.21z"
        fillRule="evenodd"
        fill="#4c5e8b"
      />
      <Path
        d="M32.938 14.863a1.831 1.831 0 00-1.45-.011 1.794 1.794 0 00-1.015 1.003 1.819 1.819 0 00-.012 1.45 1.8 1.8 0 001.004 1.019c.48.203.953.207 1.43.016a1.824 1.824 0 001.039-1.012 1.79 1.79 0 00.015-1.426 1.802 1.802 0 00-1.011-1.039z"
        fillRule="evenodd"
        fill="url(#necklace_svg__bi)"
        transform="matrix(1.25 0 0 -1.25 0 50)"
      />
      <G
        clipPath="url(#necklace_svg__bj)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__bk)"
          transform="scale(.47921 -.47921) rotate(21.949 120.518 144.991)">
          <Path
            d="M33.949 15.898a1.807 1.807 0 00-1.011-1.035 1.814 1.814 0 00-1.45-.011 1.794 1.794 0 00-1.015 1.003 1.819 1.819 0 00-.012 1.45 1.8 1.8 0 001.004 1.019c.48.203.953.207 1.43.016a1.815 1.815 0 001.039-1.012 1.8 1.8 0 00.015-1.43z"
            fill="url(#necklace_svg__Z)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <G
        clipPath="url(#necklace_svg__bl)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__bm)"
          transform="matrix(.33797 -.33971 -.27041 -.32229 -286.96 -1971.6)">
          <Path
            d="M30.832 16.047a.283.283 0 00.051.187c.07.09.191.094.363.008.211-.121.371-.281.481-.476.109-.2.089-.332-.055-.395-.133-.066-.301-.016-.508.152-.191.165-.305.34-.332.524z"
            fill="url(#necklace_svg__ac)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <Path
        d="M40.44 33.775c-.25.61-.67 1.044-1.265 1.299a2.277 2.277 0 01-1.816.008 2.24 2.24 0 01-1.27-1.255 2.27 2.27 0 01-.01-1.81 2.24 2.24 0 011.25-1.27c.601-.253 1.196-.263 1.787-.025.61.25 1.045.67 1.299 1.265.254.6.264 1.197.025 1.788z"
        fillRule="evenodd"
        fill="#79a9e1"
      />
      <Path
        d="M39.034 34.692c-.622-.16-1.022-.453-1.197-.868l-.02-.04c.118.196.28.356.484.483.254.128.395.195.434.21.128.05.284.07.459.054.293.079.557.064.791-.033l-.17.185a1.163 1.163 0 01-.781.01z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M37.866 30.703l.215-.137.175-.028c-.326.277-.487.482-.472.615-.005.107.126.297.38.576.225.239.284.415.176.522l-.361.337a.292.292 0 00-.161.16c-.147.2-.195.397-.142.592l.014.039-.009.03c0 .214.054.429.16.644-.238-.377-.351-.625-.346-.752-.039-.596.123-.967.479-1.103.18-.074.244-.182.19-.308a3.994 3.994 0 01-.331-.459c-.162-.191-.235-.308-.22-.347 0-.044.082-.171.253-.381zM38.096 34.703c-.01-.09-.068-.187-.171-.294l.039-.019c.025-.01.005-.074-.059-.181.117.132.24.235.361.302.366.215.591.358.669.435.079.074.089.142.045.21l-.596.118.097-.415-.126.4-.352-.01a.22.22 0 00.137-.175.269.269 0 00.141-.196c.029-.078.005-.117-.078-.132l-.107-.043zM40.034 32.29a.773.773 0 00.21-.435l.043-.111.143.282c-.133.338-.361.63-.679.889-.386.318-.312.533.224.64.138.034.333-.015.581-.151l-.038.175-.313.294c-.542.062-.884-.108-1.02-.51-.054-.19-.005-.365.141-.522.259-.156.459-.297.6-.433l.108-.118zM36.758 33.13c-.024.595.122.986.43 1.176.238.162.414.308.532.44.131.161.121.239-.035.244-.175.015-.297.02-.361.015-.108 0-.239-.044-.4-.128l-.215-.185.122.02c.185.073.342.083.474.03.21-.088.039-.29-.504-.592a.708.708 0 01-.2-.307 1.183 1.183 0 00-.077-.288l-.01-.459-.044.273c-.21-.6-.297-1.143-.254-1.622l.2-.336-.015.605c.02.162.093.353.22.577.088.204.132.386.137.537zM38.594 30.576l.122.02c-.235.16-.317.332-.24.518l-.005.092c.04.274.225.434.548.479.341.009.541-.084.595-.279a.623.623 0 00-.019-.425l.17.133c.05.151.015.317-.106.507-.157.279-.353.395-.592.342l-.317-.093-.415-.654.015-.03c-.02-.22.062-.425.244-.61z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M39.258 34.301l-.367-.053c.059-.04.084-.108.079-.195l-.225-.088c-.01.083-.059.117-.136.107-.064-.004-.118-.137-.167-.39l-.073-.224-.014-.202c.019-.205.054-.321.108-.341-.054.128.003.302.175.522.127.157.263.28.405.357.708.435 1.172.43 1.397-.019l-.102.249-.255.156-.24.034c-.258.044-.453.074-.586.087zM40.195 33.096c.249-.293.371-.513.356-.65.059.249.069.484.04.713-.088.112-.156.171-.201.176-.106 0-.18-.039-.209-.117l.014-.122z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M37.94 34.77a.771.771 0 00-.279-.434c-.43-.322-.669-.606-.727-.845a1.362 1.362 0 01-.084-.517 1.58 1.58 0 00-.053-.503l-.18-.43-.016-.2c.03-.181.098-.347.2-.503.079-.137.259-.347.543-.62l.327-.093c-.245.181-.44.425-.586.733-.133.268-.166.468-.113.6.118.347.167.625.147.835-.029.18-.009.396.068.64.07.307.21.537.43.688l.308.288c.103.107.161.205.171.294l.044.37a.22.22 0 01-.138.176l-.272-.049.068-.005.078-.029c.093-.073.113-.205.064-.396z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M38.256 30.538l.148.028-.049.044c-.069.059-.112.171-.132.333l.112.273.415.654.069.151c.053.133.005.264-.157.391a10.16 10.16 0 00-.63.362c-.17.102-.253.282-.248.541-.015.151-.015.279.008.376l-.082-.274-.029-.175.009.137-.014-.039c-.054-.195-.005-.391.141-.591l.523-.498c.107-.107.049-.284-.176-.522-.254-.279-.385-.469-.38-.577-.015-.132.146-.337.472-.615z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M38.476 31.114c-.077-.187.005-.358.24-.518l.288.083a.477.477 0 00-.136.269c-.05.17 0 .287.146.346.176.049.284.03.317-.064l.078-.195c.035.293-.088.44-.366.435-.268.019-.454-.097-.567-.356zM39.678 32.373c-.308.068-.552.17-.738.312l-.082.128.01-.026c.033-.136.126-.262.277-.374.411-.264.63-.41.665-.44a.727.727 0 00.321-.484l.157.255-.044.111c-.18.23-.367.401-.567.517zM38.506 34.16l.752.141.03.01c.253.059.517.015.795-.131l.255-.156-.353.473a1.201 1.201 0 01-.791.034 1.596 1.596 0 01-.488-.23l-.2-.141z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M37.905 34.209l-.064-.157a1.445 1.445 0 01-.16-.643l.009-.03-.009-.136.029.175c-.005.063.025.17.093.327l.035.079c.175.415.575.707 1.196.869.267.087.526.082.781-.01-.264.22-.542.376-.835.473.049-.068.034-.136-.045-.21-.077-.077-.302-.22-.669-.435a1.421 1.421 0 01-.361-.302zM39.043 33.794c-.313-.19-.375-.518-.185-.981l.082-.128c.186-.141.43-.244.738-.313l.356-.082-.108.117-.312.132c-.351.117-.551.347-.605.693-.034.2.092.382.395.547.264.147.479.201.645.161l.156-.067.313-.294-.078.196c-.225.449-.689.454-1.397.019zM36.582 34.126a.673.673 0 00-.083-.356.545.545 0 01-.049-.279l.064-.395.01.459c.043.317.136.517.277.595.543.302.714.504.504.591-.133.054-.289.044-.474-.029l-.122-.02a2.678 2.678 0 01-.43-.527c.181.181.283.171.303-.039zM36.606 31.582l.01.46.049.117c-.171-.22-.23-.494-.185-.822l.4-.35c-.171.21-.264.41-.274.595zM39.634 31.773c.097-.093.181-.274.248-.548l.206.21c-.122.363-.367.543-.733.548l.279-.21z"
        fillRule="evenodd"
        fill="#4c5e8b"
      />
      <Path
        d="M31.34 11.941a1.822 1.822 0 00-1.453-.007 1.791 1.791 0 00-1.016 1.004c-.203.476-.207.96-.008 1.449.188.472.524.812 1 1.015.481.203.957.211 1.43.02a1.836 1.836 0 001.039-1.012c.203-.48.211-.957.02-1.43a1.846 1.846 0 00-1.012-1.039z"
        fillRule="evenodd"
        fill="url(#necklace_svg__bn)"
        transform="matrix(1.25 0 0 -1.25 0 50)"
      />
      <G
        clipPath="url(#necklace_svg__bo)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__bp)"
          transform="scale(.47921 -.47921) rotate(21.949 103.138 139.43)">
          <Path
            d="M32.352 12.98a1.846 1.846 0 00-1.012-1.039 1.822 1.822 0 00-1.453-.007 1.791 1.791 0 00-1.016 1.004c-.203.476-.207.96-.008 1.449.188.472.524.812 1 1.015.481.203.957.211 1.43.02a1.836 1.836 0 001.039-1.012c.203-.48.211-.957.02-1.43z"
            fill="url(#necklace_svg__Z)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <G
        clipPath="url(#necklace_svg__bq)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__br)"
          transform="matrix(.33797 -.33971 -.27041 -.32229 -288.56 -1974.5)">
          <Path
            d="M29.23 13.125a.276.276 0 00.051.187c.071.094.192.094.364.008.21-.117.371-.277.48-.476s.09-.328-.055-.391c-.129-.07-.3-.019-.508.152-.191.165-.3.336-.332.52z"
            fill="url(#necklace_svg__ac)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <Path
        d="M37.49 37.324a2.287 2.287 0 01-1.269 1.299 2.268 2.268 0 01-1.812.01 2.24 2.24 0 01-1.269-1.256 2.291 2.291 0 01-.015-1.81 2.252 2.252 0 011.255-1.27 2.25 2.25 0 011.788-.024c.61.248 1.045.668 1.298 1.264.254.6.264 1.197.024 1.787z"
        fillRule="evenodd"
        fill="#79a9e1"
      />
      <Path
        d="M36.084 38.242c-.62-.16-1.02-.454-1.202-.87l-.013-.038c.116.195.272.356.482.483.249.127.397.196.435.21.127.05.283.07.459.054.293.078.556.064.791-.033l-.171.19a1.195 1.195 0 01-.781.005z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M34.918 34.252l.213-.136.177-.028c-.328.277-.49.482-.48.614 0 .108.133.298.387.577.225.238.283.415.175.522l-.361.337a.29.29 0 00-.16.16c-.148.2-.196.396-.143.592l.015.039-.01.029c0 .215.054.43.162.645-.24-.377-.352-.625-.347-.753-.04-.595.122-.961.479-1.097.18-.08.244-.182.19-.313a4.69 4.69 0 01-.337-.46c-.157-.19-.23-.307-.215-.341 0-.044.083-.176.255-.386zM35.146 38.252c-.01-.088-.068-.186-.175-.293l.039-.019c.029-.01.01-.074-.054-.181.118.131.239.235.362.307.366.21.59.351.663.43.079.073.093.141.044.21l-.59.118.098-.415-.128.4-.351-.01a.205.205 0 00.131-.172c.089-.053.138-.12.147-.2.03-.077.006-.117-.078-.13l-.108-.045zM37.085 35.84a.806.806 0 00.21-.435l.044-.112.141.283c-.131.337-.361.63-.679.889-.385.318-.312.532.225.64.137.034.333-.015.582-.152l-.04.176-.312.294c-.542.062-.883-.108-1.026-.51a.533.533 0 01.148-.522c.258-.156.453-.297.595-.433l.112-.118zM33.809 36.68c-.025.595.117.986.43 1.176a2.8 2.8 0 01.531.44c.133.162.117.239-.034.244-.176.015-.297.02-.361.015-.107 0-.239-.04-.4-.128l-.215-.184.121.018c.187.074.343.084.474.03.205-.088.04-.288-.507-.591a.727.727 0 01-.195-.308 1.179 1.179 0 00-.08-.287l-.008-.46-.045.274c-.21-.6-.297-1.143-.254-1.622l.2-.336-.018.605c.023.161.097.351.225.576.087.205.13.387.136.538zM35.645 34.126l.121.019c-.238.161-.317.332-.238.517l-.006.094c.04.273.22.434.547.479.342.009.542-.084.596-.274a.643.643 0 00-.02-.43l.171.131c.049.153.015.318-.107.51-.157.277-.352.394-.59.34l-.318-.092-.415-.655.014-.029c-.019-.22.064-.425.245-.61z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M36.309 37.851l-.366-.053c.058-.04.082-.103.077-.196l-.224-.087c-.01.083-.058.116-.137.107-.063-.004-.117-.137-.165-.39l-.074-.226-.015-.2c.02-.205.054-.321.107-.341-.053.126.006.302.177.522.126.162.264.278.405.357.707.435 1.171.43 1.396-.02l-.102.25-.26.156-.238.034c-.254.048-.45.073-.581.087zM37.246 36.645c.249-.293.372-.512.357-.649.058.249.068.484.038.713-.092.112-.156.171-.2.176-.112 0-.18-.039-.215-.117l.02-.123z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M34.99 38.32a.77.77 0 00-.278-.434c-.43-.322-.675-.606-.727-.845-.054-.127-.084-.302-.084-.517s-.015-.382-.054-.504l-.18-.429-.015-.201c.03-.18.098-.346.2-.498.08-.14.26-.35.543-.625l.326-.092c-.243.18-.438.425-.585.732-.132.27-.171.47-.112.6.116.353.166.626.146.836-.03.18-.01.396.064.64.072.307.215.537.433.688l.304.288c.107.107.165.205.175.293l.039.376a.205.205 0 01-.131.17l-.274-.048.069-.005.077-.029c.094-.073.113-.205.064-.396z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M35.307 34.087l.147.03-.049.043c-.068.059-.112.171-.136.333l.117.272.415.655.068.156c.054.127.005.259-.156.387a10.16 10.16 0 00-.63.36c-.17.103-.254.283-.254.542-.01.151-.01.279.01.376l-.078-.273-.03-.17.01.13-.015-.038c-.053-.196-.005-.391.143-.591l.521-.498c.107-.107.05-.284-.175-.522-.254-.279-.386-.469-.386-.577-.01-.132.151-.337.479-.615z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M35.528 34.663c-.08-.185 0-.357.238-.518l.289.084a.486.486 0 00-.137.269c-.05.17 0 .287.147.346.175.048.278.028.316-.064l.079-.195c.034.293-.088.44-.366.435-.269.019-.454-.098-.567-.357zM36.729 35.922c-.308.07-.553.172-.738.313l-.087.128.013-.026a.689.689 0 01.28-.375c.41-.263.63-.41.663-.44a.745.745 0 00.323-.483l.156.253-.044.113a2.04 2.04 0 01-.566.517zM35.556 37.71l.753.141.028.01c.254.059.518.015.792-.131l.258-.156-.35.473a1.21 1.21 0 01-.792.034 1.602 1.602 0 01-.489-.23l-.2-.141z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M34.956 37.759l-.064-.157a1.431 1.431 0 01-.16-.644l.01-.03-.01-.13.03.17c-.006.063.023.17.092.327l.028.077c.182.415.582.71 1.202.87.268.088.527.083.781-.005a2.599 2.599 0 01-.84.47c.049-.07.035-.138-.044-.21-.072-.08-.297-.22-.664-.43a1.568 1.568 0 01-.36-.308zM36.094 37.344c-.313-.19-.377-.518-.19-.982l.087-.127c.185-.141.43-.244.738-.313l.356-.082-.112.117-.308.132c-.351.117-.551.346-.605.693-.04.2.093.38.395.547.264.146.479.2.645.161l.156-.068.313-.293-.079.195c-.225.45-.692.455-1.396.02zM33.633 37.676a.733.733 0 00-.083-.357.541.541 0 01-.049-.278l.064-.396.009.46c.045.317.137.517.273.595.548.302.713.502.508.591-.131.054-.288.044-.474-.03l-.121-.019a2.864 2.864 0 01-.435-.527c.186.18.289.171.307-.039zM33.657 35.136l.01.455.05.117c-.172-.22-.236-.493-.187-.82l.401-.352c-.171.21-.264.41-.274.6zM36.68 35.322c.103-.092.185-.273.254-.547l.205.215c-.123.356-.367.537-.738.542l.279-.21z"
        fillRule="evenodd"
        fill="#4c5e8b"
      />
      <Path
        d="M28.977 9.102a1.814 1.814 0 00-1.45-.008 1.793 1.793 0 00-1.015 1.004 1.833 1.833 0 00-.012 1.449c.191.473.527.812 1.004 1.015a1.8 1.8 0 001.43.02 1.836 1.836 0 001.039-1.012c.203-.48.211-.957.019-1.429a1.83 1.83 0 00-1.015-1.039z"
        fillRule="evenodd"
        fill="url(#necklace_svg__bs)"
        transform="matrix(1.25 0 0 -1.25 0 50)"
      />
      <G
        clipPath="url(#necklace_svg__bt)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__bu)"
          transform="scale(.47921 -.47921) rotate(21.949 85.394 129.694)">
          <Path
            d="M29.992 10.141a1.83 1.83 0 00-1.015-1.039 1.814 1.814 0 00-1.45-.008 1.793 1.793 0 00-1.015 1.004 1.833 1.833 0 00-.012 1.449c.191.473.527.812 1.004 1.015a1.8 1.8 0 001.43.02 1.836 1.836 0 001.039-1.012c.203-.48.211-.957.019-1.429z"
            fill="url(#necklace_svg__Z)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <G
        clipPath="url(#necklace_svg__bv)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__bw)"
          transform="matrix(.33797 -.33971 -.27041 -.32229 -290.92 -1977.4)">
          <Path
            d="M26.871 10.285a.28.28 0 00.051.188c.07.093.191.093.363.007.211-.117.371-.277.481-.476.109-.199.089-.328-.055-.391-.129-.07-.301-.019-.508.153-.191.164-.301.336-.332.519z"
            fill="url(#necklace_svg__ac)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <Path
        d="M34.341 39.824c-.25.611-.668 1.045-1.27 1.299a2.265 2.265 0 01-1.811.01 2.225 2.225 0 01-1.27-1.256 2.291 2.291 0 01-.015-1.81 2.26 2.26 0 011.255-1.27 2.25 2.25 0 011.787-.024c.61.248 1.045.668 1.3 1.264.253.6.263 1.197.024 1.787z"
        fillRule="evenodd"
        fill="#79a9e1"
      />
      <Path
        d="M32.935 40.742c-.625-.16-1.021-.454-1.201-.87l-.015-.038c.112.195.273.356.483.483.25.127.396.196.434.21.128.05.284.07.46.054.293.078.557.064.79-.033l-.175.19a1.18 1.18 0 01-.776.005z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M31.768 36.752l.215-.136.17-.028c-.327.277-.483.482-.473.614 0 .108.126.298.385.577.225.238.284.415.176.522l-.366.337a.308.308 0 00-.161.16c-.141.2-.19.396-.136.592l.013.039-.008.029c0 .215.048.43.156.645-.235-.377-.348-.625-.343-.753-.038-.595.123-.961.479-1.097.181-.08.244-.182.185-.313a5.529 5.529 0 01-.331-.46c-.156-.19-.23-.307-.215-.341-.005-.044.082-.176.254-.386zM31.992 40.752c-.005-.088-.063-.186-.17-.293l.038-.019c.03-.01.01-.074-.054-.181.118.131.24.235.361.307.367.21.587.351.665.43.078.073.093.141.044.21l-.596.118.103-.415-.127.4-.352-.01a.206.206 0 00.132-.172c.088-.053.137-.12.147-.2.03-.077.005-.117-.078-.13l-.112-.045zM33.935 38.34a.768.768 0 00.205-.435l.05-.112.141.283c-.132.337-.361.63-.679.889-.386.318-.312.532.225.64.137.034.332-.015.58-.152l-.038.176-.313.294c-.541.062-.884-.108-1.025-.51a.535.535 0 01.146-.522 3.44 3.44 0 00.597-.433l.111-.118zM30.659 39.18c-.024.595.117.986.43 1.176.239.162.415.308.532.44.132.162.118.239-.033.244-.177.015-.3.02-.363.015-.106 0-.239-.04-.4-.128l-.215-.184.122.018c.185.074.342.084.474.03.205-.088.039-.288-.507-.591a.761.761 0 01-.202-.308 1.2 1.2 0 00-.072-.287l-.01-.46-.049.274c-.21-.6-.292-1.143-.249-1.622l.2-.336-.02.605c.025.161.098.351.225.576.088.205.132.387.137.538zM32.495 36.626l.122.019c-.24.161-.317.332-.24.517l-.008.094c.043.273.223.434.551.479.341.009.537-.084.595-.274a.667.667 0 00-.019-.43l.172.131c.048.153.008.318-.108.51-.156.277-.352.394-.591.34l-.318-.092-.415-.655.01-.029c-.015-.22.069-.425.249-.61z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M33.159 40.351l-.367-.053c.06-.04.084-.103.08-.196l-.226-.087c-.01.083-.059.116-.136.107-.064-.004-.122-.137-.166-.39l-.074-.226-.014-.2c.014-.205.054-.321.103-.341-.049.126.01.302.18.522.127.162.263.278.405.357.703.435 1.172.43 1.392-.02l-.097.25-.259.156-.24.034a6.78 6.78 0 01-.581.087zM34.096 39.145c.25-.293.372-.512.357-.649.053.249.068.484.04.713-.093.112-.157.171-.206.176-.107 0-.176-.039-.21-.117l.02-.123z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M31.841 40.82a.771.771 0 00-.279-.434c-.43-.322-.673-.606-.727-.845-.054-.127-.083-.302-.083-.517s-.014-.382-.053-.504l-.182-.429-.02-.201a1.27 1.27 0 01.206-.498c.078-.14.26-.35.537-.625l.333-.092c-.25.18-.445.425-.587.732-.131.27-.171.47-.112.6.117.353.166.626.146.836-.029.18-.009.396.064.64.073.307.215.537.435.688l.302.288c.108.107.166.205.171.293l.044.376a.206.206 0 01-.132.17l-.273-.048.068-.005.078-.029c.093-.073.113-.205.064-.396z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M32.154 36.587l.151.03-.049.043c-.068.059-.112.171-.137.333l.117.272.415.655.069.156c.054.127 0 .259-.156.387a10.16 10.16 0 00-.63.36c-.172.103-.254.283-.254.542a1.29 1.29 0 00.01.376l-.084-.273-.023-.17.008.13-.013-.038c-.054-.196-.005-.391.136-.591l.527-.498c.108-.107.049-.284-.176-.522-.259-.279-.385-.469-.385-.577-.01-.132.146-.337.474-.615z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M32.377 37.163c-.077-.185 0-.357.24-.518l.288.084a.488.488 0 00-.141.269c-.049.17.005.287.151.346.176.048.279.028.318-.064l.077-.195c.035.293-.088.44-.366.435-.268.019-.459-.098-.567-.357zM33.579 38.422c-.308.07-.552.172-.738.313l-.087.128.015-.026a.677.677 0 01.279-.375c.41-.263.628-.41.663-.44a.754.754 0 00.323-.483l.156.253-.05.113c-.175.23-.361.401-.561.517zM32.407 40.21l.752.141.025.01c.258.059.522.015.796-.131l.259-.156-.353.473a1.206 1.206 0 01-.79.034 1.536 1.536 0 01-.488-.23l-.2-.141z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M31.806 40.259l-.067-.157a1.424 1.424 0 01-.157-.644l.01-.03-.01-.13.024.17c0 .063.03.17.098.327l.03.077c.18.415.576.71 1.201.87.268.088.527.083.776-.005a2.539 2.539 0 01-.835.47c.049-.07.034-.138-.043-.21-.08-.08-.3-.22-.666-.43a1.594 1.594 0 01-.36-.308zM32.944 39.844c-.313-.19-.375-.518-.19-.982l.087-.127c.187-.141.43-.244.738-.313l.356-.082-.111.117-.313.132c-.347.117-.547.346-.601.693-.039.2.093.38.396.547.259.146.473.2.644.161l.156-.068.313-.293-.083.195c-.22.45-.688.455-1.392.02zM30.484 40.176a.732.732 0 00-.084-.357.541.541 0 01-.049-.278l.064-.396.01.46c.044.317.131.517.274.595.546.302.712.502.507.591-.132.054-.288.044-.473-.03l-.123-.019a2.904 2.904 0 01-.434-.527c.185.18.288.171.308-.039zM30.508 37.636l.01.455.048.117c-.171-.22-.233-.493-.185-.82l.4-.352c-.171.21-.263.41-.273.6zM33.53 37.822c.103-.092.186-.273.254-.547l.205.215c-.122.356-.37.537-.737.542l.278-.21z"
        fillRule="evenodd"
        fill="#4c5e8b"
      />
      <Path
        d="M26.457 7.102a1.812 1.812 0 00-1.449-.008 1.791 1.791 0 00-1.016 1.004 1.833 1.833 0 00-.012 1.449c.192.473.528.812 1.004 1.015a1.8 1.8 0 001.43.02 1.836 1.836 0 001.039-1.012c.203-.48.207-.957.016-1.429a1.813 1.813 0 00-1.012-1.039z"
        fillRule="evenodd"
        fill="url(#necklace_svg__bx)"
        transform="matrix(1.25 0 0 -1.25 0 50)"
      />
      <G
        clipPath="url(#necklace_svg__by)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__bz)"
          transform="matrix(.44448 -.17912 -.17912 -.44448 23.677 8.79)">
          <Path
            d="M27.473 8.141a1.831 1.831 0 00-1.016-1.039 1.812 1.812 0 00-1.449-.008 1.78 1.78 0 00-1.016 1.004 1.833 1.833 0 00-.012 1.449c.192.473.528.812 1.004 1.015a1.8 1.8 0 001.43.02 1.836 1.836 0 001.039-1.012c.203-.48.211-.957.02-1.429z"
            fill="url(#necklace_svg__Z)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <G
        clipPath="url(#necklace_svg__bA)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__bB)"
          transform="matrix(.33797 -.33971 -.27041 -.32229 -293.44 -1979.4)">
          <Path
            d="M24.352 8.285a.28.28 0 00.05.188c.071.093.192.093.364.007.211-.117.371-.277.48-.476s.09-.328-.055-.391c-.132-.07-.3-.019-.507.153-.192.164-.301.336-.332.519z"
            fill="url(#necklace_svg__ac)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <Path
        d="M29.087 41.972a2.259 2.259 0 01-1.265 1.3 2.291 2.291 0 01-1.81.014 2.24 2.24 0 01-1.27-1.255c-.26-.6-.26-1.201-.016-1.816.24-.591.66-1.016 1.255-1.27a2.271 2.271 0 011.788-.024 2.29 2.29 0 011.298 1.269c.254.596.26 1.191.02 1.782z"
        fillRule="evenodd"
        fill="#79a9e1"
      />
      <Path
        d="M27.685 42.895c-.625-.165-1.025-.459-1.2-.874l-.015-.039c.112.2.274.362.483.49.25.12.396.19.43.204.132.054.283.073.463.059.294.073.558.063.792-.04l-.175.191c-.25.093-.514.093-.778.009z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M26.514 38.901l.22-.136.17-.03c-.327.279-.483.484-.473.62 0 .108.126.299.38.571.23.245.289.415.181.523l-.366.342a.258.258 0 00-.161.162c-.146.195-.19.395-.141.585l.018.04-.01.028c-.005.215.05.43.157.645-.234-.376-.352-.625-.342-.752-.038-.595.118-.961.474-1.099.185-.077.249-.18.19-.312a6.79 6.79 0 01-.331-.454c-.156-.195-.23-.313-.215-.346-.005-.044.077-.172.249-.387zM26.744 42.9c-.005-.088-.064-.185-.172-.293l.04-.014c.024-.016.01-.073-.055-.186.118.137.24.234.362.308.366.21.586.356.663.43.08.072.094.146.045.21l-.596.116.103-.41-.132.402-.347-.016a.208.208 0 00.132-.17c.088-.055.137-.118.147-.2.028-.075.005-.118-.079-.128l-.111-.049zM28.686 40.489a.757.757 0 00.205-.435l.044-.108.147.284a2.23 2.23 0 01-.683.889c-.387.316-.308.526.228.638.138.035.328-.018.577-.156l-.039.181-.312.293c-.543.059-.88-.108-1.02-.508a.529.529 0 01.146-.522c.254-.156.454-.303.595-.44l.112-.116zM25.41 41.332c-.024.592.117.983.43 1.173.234.161.415.307.532.439.127.161.117.245-.035.25-.18.008-.297.018-.36.013-.108 0-.24-.043-.4-.13l-.216-.182.123.015c.185.074.341.084.468.03.21-.089.044-.284-.503-.591a.757.757 0 01-.2-.308 1.295 1.295 0 00-.073-.288l-.015-.454-.044.268c-.21-.6-.293-1.137-.248-1.616l.2-.341-.02.61c.025.156.097.346.22.571.092.21.136.385.141.541zM27.246 38.779l.123.015c-.24.161-.318.337-.245.517l-.005.093c.04.273.225.435.552.478.341.01.536-.082.595-.272a.636.636 0 00-.024-.43l.175.136c.05.146.01.318-.107.503-.156.283-.356.396-.59.342l-.318-.092-.415-.655.01-.024c-.02-.225.063-.43.25-.611z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M27.91 42.5l-.371-.049c.058-.043.088-.107.078-.195l-.22-.093c-.01.083-.058.117-.14.107-.06-.005-.118-.131-.167-.39l-.069-.225-.019-.2c.02-.205.058-.318.108-.341-.05.126.009.302.175.522.133.161.264.278.405.356.709.434 1.172.43 1.398-.02l-.1.254-.258.151-.239.035a5.54 5.54 0 01-.581.088zM28.848 41.294c.248-.293.366-.508.356-.644.053.244.068.478.035.708-.089.117-.157.176-.202.176-.106 0-.175-.04-.21-.118l.02-.122z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M26.587 42.969a.766.766 0 00-.273-.435c-.43-.322-.674-.605-.728-.84-.058-.132-.083-.303-.083-.518 0-.214-.02-.385-.054-.507l-.18-.43-.02-.2c.03-.18.097-.347.2-.498.083-.141.263-.347.542-.62l.333-.097c-.25.18-.445.428-.587.732-.132.273-.17.473-.117.6.122.352.171.63.151.835-.028.182-.01.395.064.64.069.308.215.542.435.693l.302.284c.108.107.167.205.172.292l.043.376a.208.208 0 01-.132.171l-.274-.043.069-.005.079-.035c.092-.068.111-.2.058-.395z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M26.904 38.735l.152.03-.05.044c-.067.059-.111.171-.136.336l.117.269.415.655.07.156c.053.131 0 .259-.162.39-.049.02-.259.141-.625.356-.171.103-.259.289-.254.548-.015.151-.01.274.009.376l-.083-.279-.025-.171.01.133-.018-.04c-.049-.19-.005-.39.141-.585l.527-.504c.108-.108.05-.278-.18-.523-.255-.272-.38-.463-.38-.571-.01-.136.146-.341.472-.62z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M27.124 39.311c-.073-.18.005-.356.245-.517l.287.084a.494.494 0 00-.141.267c-.049.176 0 .289.151.352.172.05.278.024.318-.068l.077-.195c.035.292-.092.438-.371.433-.264.026-.454-.097-.566-.356zM28.33 40.571a1.988 1.988 0 00-.742.313l-.083.131.01-.029a.649.649 0 01.283-.371c.405-.269.63-.415.66-.444a.737.737 0 00.326-.484l.151.26-.044.107c-.175.23-.366.405-.561.517zM27.159 42.359l.751.141.025.01c.259.059.522.019.795-.133l.259-.15-.352.468c-.233.103-.497.112-.79.04a1.692 1.692 0 01-.488-.23l-.2-.146z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M26.557 42.407l-.068-.156a1.431 1.431 0 01-.162-.645l.015-.029-.01-.132.025.171c-.005.064.03.171.093.328l.035.077c.175.415.575.709 1.2.874.264.084.527.084.777-.009-.26.214-.537.375-.835.469.05-.064.034-.138-.045-.21-.077-.074-.297-.22-.663-.43a1.504 1.504 0 01-.362-.308zM27.69 41.992c-.307-.19-.371-.517-.185-.977l.083-.131c.186-.137.435-.244.742-.313l.356-.082-.112.116-.313.133c-.346.117-.546.35-.6.693-.039.2.093.38.39.547.264.146.479.204.645.16l.156-.063.313-.293-.077.19c-.22.45-.69.454-1.398.02zM25.235 42.324a.787.787 0 00-.084-.356.494.494 0 01-.048-.278l.063-.391.01.453c.039.318.132.518.273.597.547.307.714.502.504.591-.128.054-.284.044-.47-.03l-.122-.015a2.889 2.889 0 01-.435-.531c.187.185.289.17.309-.04zM25.254 39.785l.015.454.049.117c-.172-.22-.236-.492-.19-.815l.404-.356c-.17.21-.263.41-.278.6zM28.281 39.971c.103-.088.185-.268.254-.547l.205.215c-.126.356-.371.542-.737.542l.278-.21z"
        fillRule="evenodd"
        fill="#4c5e8b"
      />
      <Path
        d="M22.258 5.383a1.833 1.833 0 00-1.449-.012 1.792 1.792 0 00-1.016 1.004c-.207.48-.207.961-.012 1.453a1.81 1.81 0 001.004 1.016c.477.203.953.207 1.43.019a1.844 1.844 0 001.039-1.015c.203-.477.207-.953.016-1.426a1.819 1.819 0 00-1.012-1.039z"
        fillRule="evenodd"
        fill="url(#necklace_svg__bC)"
        transform="matrix(1.25 0 0 -1.25 0 50)"
      />
      <G
        clipPath="url(#necklace_svg__bD)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__bE)"
          transform="scale(.47921 -.47921) rotate(21.949 58.365 97.42)">
          <Path
            d="M23.27 6.422a1.807 1.807 0 00-1.012-1.039 1.833 1.833 0 00-1.449-.012 1.792 1.792 0 00-1.016 1.004c-.207.48-.207.961-.012 1.453a1.81 1.81 0 001.004 1.016c.477.203.953.207 1.43.019a1.832 1.832 0 001.039-1.015c.203-.477.207-.953.016-1.426z"
            fill="url(#necklace_svg__Z)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <G
        clipPath="url(#necklace_svg__bF)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__bG)"
          transform="matrix(.33797 -.33971 -.27041 -.32229 -297.64 -1981.1)">
          <Path
            d="M20.152 6.566a.27.27 0 00.051.188c.07.09.192.094.363.008.211-.121.372-.278.481-.477s.09-.332-.055-.394c-.133-.067-.301-.016-.508.156-.191.16-.304.336-.332.519z"
            fill="url(#necklace_svg__ac)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <Path
        d="M12.139 30.474a2.28 2.28 0 01-1.265 1.298c-.6.254-1.207.26-1.817.015a2.265 2.265 0 01-1.27-1.255 2.277 2.277 0 01-.008-1.816 2.24 2.24 0 011.255-1.27 2.235 2.235 0 011.781-.024 2.287 2.287 0 011.299 1.27c.255.595.263 1.19.025 1.782z"
        fillRule="evenodd"
        fill="#79a9e1"
      />
      <Path
        d="M10.732 31.396c-.62-.166-1.02-.458-1.196-.873l-.02-.04c.118.196.279.362.484.488.254.123.395.192.435.205.126.054.283.069.459.059.292.074.556.059.791-.039l-.171.19a1.178 1.178 0 01-.781.01z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M9.565 27.402l.215-.137.176-.029c-.327.279-.489.484-.474.615 0 .108.128.303.382.577.223.24.282.415.175.522l-.362.338a.292.292 0 00-.16.16c-.147.2-.19.396-.142.59l.02.04-.015.03c0 .215.054.43.161.645-.24-.377-.351-.625-.342-.753-.039-.596.117-.963.473-1.099.182-.077.245-.18.192-.312a4.531 4.531 0 01-.333-.459c-.161-.19-.234-.307-.215-.342-.005-.044.079-.175.249-.385zM9.795 31.401c-.01-.087-.064-.185-.171-.292l.038-.02c.025-.01.005-.069-.057-.18.121.131.239.234.361.307.367.21.59.352.669.429.077.074.092.143.044.21l-.597.118.103-.415-.131.4-.352-.01a.226.226 0 00.137-.17.302.302 0 00.146-.2c.03-.074 0-.118-.077-.133l-.113-.044zM11.739 28.989a.776.776 0 00.205-.434l.043-.112.147.287a2.196 2.196 0 01-.684.884c-.385.322-.307.532.225.645.136.028.331-.02.581-.157l-.04.177-.312.297c-.541.059-.884-.112-1.02-.512-.054-.192-.005-.367.146-.523.254-.151.455-.297.596-.435l.113-.117zM8.457 29.829c-.025.596.122.986.43 1.177.24.161.414.308.537.439.127.161.117.245-.034.245a5.526 5.526 0 01-.361.019c-.113 0-.245-.044-.401-.132l-.22-.186.122.02c.186.074.343.083.474.029.21-.088.039-.288-.503-.59a.697.697 0 01-.2-.308 1.345 1.345 0 00-.078-.288l-.01-.459-.044.274c-.21-.602-.293-1.138-.254-1.617l.2-.342-.015.606c.02.161.094.351.22.576.089.205.133.385.138.537zM10.293 27.275l.122.02c-.234.161-.317.332-.239.517l-.005.093c.039.274.224.435.547.479.342.01.542-.083.596-.274a.64.64 0 00-.02-.429l.171.131c.049.152.015.318-.107.508-.157.284-.352.396-.587.343l-.317-.094-.415-.654.01-.025c-.02-.224.064-.429.244-.615z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M10.957 31.001l-.366-.054c.059-.038.083-.102.078-.195l-.22-.088c-.014.083-.059.117-.142.107-.063-.005-.117-.136-.166-.39l-.072-.225-.015-.2c.02-.205.053-.322.107-.342-.054.127.005.303.176.522.127.161.263.279.405.358.708.433 1.172.428 1.397-.02l-.103.248-.254.157-.24.033c-.258.05-.453.08-.585.09zM11.895 29.795c.254-.293.37-.508.356-.645.059.245.068.479.039.709-.088.112-.156.17-.2.175-.107 0-.181-.039-.21-.117l.015-.122z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M9.639 31.47c-.054-.195-.141-.338-.279-.435-.429-.323-.669-.605-.727-.84-.054-.131-.078-.302-.078-.517s-.02-.385-.054-.508l-.186-.43-.014-.2c.029-.18.098-.346.2-.497.078-.143.259-.353.541-.625l.328-.094a1.932 1.932 0 00-.586.732c-.132.274-.165.469-.112.602.117.35.165.63.147.835-.03.18-.005.395.067.638.069.309.215.538.43.694l.308.284c.107.107.161.205.171.292l.044.377a.226.226 0 01-.137.17l-.268-.044.063-.004.078-.035c.092-.072.112-.205.064-.395z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M9.956 27.236l.152.029-.054.045c-.064.059-.113.17-.132.331l.117.274.415.654.063.156c.06.128.006.26-.156.386a33.97 33.97 0 00-.63.362c-.171.102-.254.283-.249.547-.014.151-.01.273.01.37l-.083-.273-.029-.17.01.13-.015-.038c-.049-.195-.005-.39.141-.59l.523-.499c.107-.107.048-.283-.175-.522-.254-.274-.382-.47-.382-.577-.015-.131.147-.336.474-.615z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M10.176 27.813c-.079-.185.005-.357.239-.518l.293.083a.47.47 0 00-.142.268c-.049.172 0 .289.146.352.177.05.284.025.318-.068l.079-.195c.034.293-.089.439-.366.434-.27.02-.456-.098-.567-.356zM11.381 29.072a1.933 1.933 0 00-.741.313l-.084.126.01-.024a.66.66 0 01.279-.37c.41-.27.63-.416.664-.445a.71.71 0 00.322-.483l.157.253-.044.113c-.181.229-.366.4-.563.517zM10.21 30.86l.747.141.03.01c.253.058.522.014.795-.132l.254-.157-.351.474a1.233 1.233 0 01-.791.039 1.709 1.709 0 01-.489-.229l-.195-.146z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M9.605 30.909l-.064-.156a1.431 1.431 0 01-.161-.645l.01-.03-.01-.132.029.171c-.005.064.025.17.093.327l.034.079c.176.415.576.707 1.196.873.27.084.528.084.782-.01a2.539 2.539 0 01-.835.469c.048-.068.033-.136-.044-.21-.079-.077-.303-.219-.669-.429a1.685 1.685 0 01-.361-.307zM10.742 30.494c-.312-.192-.37-.519-.186-.983l.084-.126c.185-.138.434-.245.741-.313l.358-.083-.113.117-.312.133c-.351.116-.553.346-.606.692-.034.2.098.381.396.548.264.146.479.2.644.161l.156-.064.312-.297-.077.195c-.225.448-.689.453-1.396.02zM8.281 30.825a.674.674 0 00-.082-.356.53.53 0 01-.049-.279l.063-.395.01.459c.043.317.137.517.278.596.542.302.713.503.503.59-.126.054-.288.045-.474-.029l-.121-.02a2.78 2.78 0 01-.43-.527c.185.181.282.171.302-.039zM8.306 28.286l.009.454.049.118c-.165-.22-.229-.494-.185-.82l.4-.353c-.17.21-.264.411-.273.601zM11.333 28.471c.098-.087.186-.272.25-.546l.205.215c-.123.356-.367.536-.733.541l.278-.21z"
        fillRule="evenodd"
        fill="#4c5e8b"
      />
      <Path
        d="M8.699 14.582a1.843 1.843 0 00-1.453-.012 1.812 1.812 0 00-1.016 1.004 1.822 1.822 0 00-.007 1.453c.191.473.523.813 1.004 1.016.476.203.953.211 1.425.019a1.83 1.83 0 001.039-1.015 1.79 1.79 0 00.02-1.426 1.836 1.836 0 00-1.012-1.039z"
        fillRule="evenodd"
        fill="url(#necklace_svg__bH)"
        transform="matrix(1.25 0 0 -1.25 0 50)"
      />
      <G
        clipPath="url(#necklace_svg__bI)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__bJ)"
          transform="scale(.47921 -.47921) rotate(21.949 93.72 14.858)">
          <Path
            d="M9.711 15.621a1.824 1.824 0 00-1.012-1.039 1.843 1.843 0 00-1.453-.012 1.812 1.812 0 00-1.016 1.004 1.822 1.822 0 00-.007 1.453c.191.473.523.813 1.004 1.016.476.203.953.211 1.425.019a1.83 1.83 0 001.039-1.015 1.79 1.79 0 00.02-1.426z"
            fill="url(#necklace_svg__Z)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <G
        clipPath="url(#necklace_svg__bK)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__bL)"
          transform="matrix(.33797 -.33971 -.27041 -.32229 -311.2 -1971.9)">
          <Path
            d="M6.594 15.766a.26.26 0 00.047.187c.07.09.195.094.367.008.207-.121.367-.277.476-.477.11-.199.094-.328-.054-.39-.129-.071-.297-.02-.504.152-.196.164-.305.336-.332.52z"
            fill="url(#necklace_svg__ac)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <Path
        d="M9.99 33.775a2.294 2.294 0 01-1.269 1.299 2.268 2.268 0 01-1.812.008 2.24 2.24 0 01-1.269-1.255 2.291 2.291 0 01-.015-1.81 2.256 2.256 0 011.255-1.27c.6-.253 1.196-.263 1.788-.025.61.25 1.045.67 1.298 1.265.254.6.264 1.197.024 1.788z"
        fillRule="evenodd"
        fill="#79a9e1"
      />
      <Path
        d="M8.584 34.692c-.62-.16-1.02-.453-1.201-.868l-.014-.04c.116.196.272.356.482.483.249.128.397.195.435.21.127.05.283.07.459.054.293.079.556.064.791-.033l-.171.185a1.163 1.163 0 01-.781.01z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M7.418 30.703l.213-.137.177-.028c-.328.277-.49.482-.48.615 0 .107.133.297.387.576.225.239.283.415.175.522l-.361.337a.293.293 0 00-.16.16c-.148.2-.197.397-.143.592l.015.039-.01.03c0 .214.054.429.161.644-.238-.377-.35-.625-.346-.752-.04-.596.121-.967.479-1.103.18-.074.244-.182.19-.308a4.837 4.837 0 01-.338-.459c-.156-.191-.228-.308-.215-.347 0-.044.084-.171.255-.381zM7.646 34.703c-.01-.09-.068-.187-.175-.294l.039-.019c.029-.01.01-.074-.054-.181a1.4 1.4 0 00.362.302c.366.215.59.358.663.435.079.074.093.142.044.21l-.59.118.098-.415-.128.4-.351-.01a.205.205 0 00.131-.175c.089-.049.138-.118.147-.196.03-.078.005-.117-.078-.132l-.108-.043zM9.585 32.29a.806.806 0 00.21-.435l.044-.111.141.282c-.131.338-.361.63-.679.889-.385.318-.312.533.225.64.136.034.333-.015.581-.151l-.038.175-.313.294c-.542.062-.884-.108-1.026-.51a.533.533 0 01.147-.522c.26-.156.454-.297.596-.433l.112-.118zM6.309 33.13c-.025.595.117.986.43 1.176a2.8 2.8 0 01.531.44c.133.161.117.239-.034.244-.176.015-.297.02-.361.015-.108 0-.239-.044-.4-.128l-.215-.185.121.02c.186.073.343.083.474.03.205-.088.04-.29-.508-.592a.727.727 0 01-.195-.307 1.179 1.179 0 00-.078-.288l-.009-.459-.045.273c-.21-.6-.298-1.143-.254-1.622l.2-.336-.019.605c.024.162.098.353.225.577.088.204.132.386.137.537zM8.145 30.576l.121.02c-.239.16-.317.332-.239.518l-.004.092c.038.274.22.434.546.479.342.009.542-.084.596-.279a.63.63 0 00-.02-.425l.171.133c.049.151.015.317-.107.507-.156.279-.351.395-.59.342L8.3 31.87l-.415-.654.014-.03c-.019-.22.064-.425.245-.61z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M8.809 34.301l-.366-.053c.058-.04.082-.108.077-.195l-.224-.088c-.01.083-.059.117-.137.107-.063-.004-.117-.137-.165-.39l-.074-.224-.015-.202c.02-.205.054-.321.107-.341-.053.128.005.302.177.522.126.157.263.28.405.357.707.435 1.171.43 1.396-.019l-.103.249-.258.156-.239.034a9.82 9.82 0 01-.581.087zM9.746 33.096c.249-.293.371-.513.356-.65.06.249.07.484.04.713-.093.112-.157.171-.2.176-.113 0-.18-.039-.216-.117l.02-.122z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M7.49 34.77a.77.77 0 00-.278-.434c-.43-.322-.674-.606-.727-.845-.054-.127-.084-.302-.084-.517s-.015-.381-.053-.503l-.18-.43-.015-.2c.028-.181.097-.347.2-.503.078-.137.258-.347.542-.62l.326-.093a1.918 1.918 0 00-.585.733c-.132.268-.171.468-.112.6.116.347.166.625.146.835-.03.18-.01.396.064.64.072.307.215.537.434.688l.303.288c.107.107.165.205.175.294l.039.37a.205.205 0 01-.131.176L7.28 35.2l.069-.005.077-.029c.094-.073.113-.205.064-.396z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M7.808 30.538l.146.028-.049.044c-.067.059-.112.171-.136.333l.117.273.415.654.068.151c.054.133.005.264-.156.391a10.16 10.16 0 00-.63.362c-.17.102-.254.282-.254.541-.01.151-.01.279.01.376l-.078-.274-.03-.175.01.137-.015-.039c-.053-.195-.005-.391.143-.591l.521-.498c.108-.107.05-.284-.175-.522-.254-.279-.386-.469-.386-.577-.01-.132.151-.337.479-.615z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M8.027 31.114c-.078-.187 0-.358.24-.518l.288.083a.486.486 0 00-.138.269c-.048.17 0 .287.148.346.175.049.278.03.316-.064l.079-.195c.034.293-.088.44-.366.435-.269.019-.454-.097-.566-.356zM9.229 32.373c-.308.068-.553.17-.738.312l-.087.128.013-.026a.693.693 0 01.28-.374c.41-.264.63-.41.663-.44a.742.742 0 00.323-.484l.156.255-.044.111a2.04 2.04 0 01-.566.517zM8.056 34.16l.753.141.029.01c.253.059.517.015.79-.131l.26-.156-.352.473a1.202 1.202 0 01-.791.034 1.602 1.602 0 01-.489-.23l-.2-.141z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M7.456 34.209l-.064-.157a1.43 1.43 0 01-.16-.643l.01-.03-.01-.136.03.175c-.006.063.023.17.092.327l.029.079c.18.415.58.707 1.2.869.27.087.528.082.782-.01-.264.22-.541.376-.84.473.049-.068.035-.136-.044-.21-.072-.077-.297-.22-.663-.435a1.4 1.4 0 01-.362-.302zM8.594 33.794c-.313-.19-.376-.518-.19-.981l.087-.128c.185-.141.43-.244.738-.313l.356-.082-.112.117-.308.132c-.351.117-.551.347-.605.693-.04.2.092.382.395.547.264.147.479.201.645.161l.156-.067.313-.294-.079.196c-.225.449-.693.454-1.396.019zM6.132 34.126a.724.724 0 00-.082-.356.545.545 0 01-.049-.279l.064-.395.009.459c.045.317.137.517.273.595.548.302.713.504.508.591-.131.054-.288.044-.474-.029l-.121-.02a2.864 2.864 0 01-.435-.527c.186.181.289.171.307-.039zM6.158 31.582l.01.46.048.117c-.171-.22-.235-.494-.186-.822l.401-.35c-.171.21-.263.41-.273.595zM9.18 31.773c.103-.093.185-.274.254-.548l.205.21c-.123.363-.366.543-.738.548l.279-.21z"
        fillRule="evenodd"
        fill="#4c5e8b"
      />
      <Path
        d="M6.977 11.941a1.814 1.814 0 00-1.45-.007 1.793 1.793 0 00-1.015 1.004c-.203.476-.207.96-.012 1.449.191.472.527.812 1.004 1.015.48.203.957.211 1.43.02a1.836 1.836 0 001.039-1.012 1.8 1.8 0 00.019-1.43 1.835 1.835 0 00-1.015-1.039z"
        fillRule="evenodd"
        fill="url(#necklace_svg__bM)"
        transform="matrix(1.25 0 0 -1.25 0 50)"
      />
      <G
        clipPath="url(#necklace_svg__bN)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__bO)"
          transform="scale(.47921 -.47921) rotate(21.949 77.72 8.359)">
          <Path
            d="M7.992 12.98a1.835 1.835 0 00-1.015-1.039 1.814 1.814 0 00-1.45-.007 1.793 1.793 0 00-1.015 1.004c-.203.476-.207.96-.012 1.449.191.472.527.812 1.004 1.015.48.203.957.211 1.43.02a1.836 1.836 0 001.039-1.012 1.8 1.8 0 00.019-1.43z"
            fill="url(#necklace_svg__Z)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <G
        clipPath="url(#necklace_svg__bP)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__bQ)"
          transform="matrix(.33797 -.33971 -.27041 -.32229 -312.92 -1974.5)">
          <Path
            d="M4.871 13.125a.27.27 0 00.051.187c.07.094.191.094.363.008.211-.117.371-.277.481-.476.109-.199.089-.328-.055-.391-.129-.07-.301-.019-.508.152-.191.165-.301.336-.332.52z"
            fill="url(#necklace_svg__ac)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <Path
        d="M23.238 42.876a2.266 2.266 0 01-1.265 1.299c-.595.254-1.202.254-1.812.01a2.255 2.255 0 01-1.275-1.255 2.286 2.286 0 01-.008-1.811 2.226 2.226 0 011.253-1.27 2.235 2.235 0 011.788-.025c.61.245 1.04.67 1.294 1.265.258.596.263 1.191.025 1.787z"
        fillRule="evenodd"
        fill="#79a9e1"
      />
      <Path
        d="M21.836 43.794c-.625-.166-1.026-.454-1.201-.869l-.015-.039c.112.195.274.357.484.483.248.122.395.191.43.205a.988.988 0 00.463.059c.293.078.557.063.79-.034l-.175.185a1.142 1.142 0 01-.776.01z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M20.664 39.805l.22-.143.171-.023c-.328.278-.484.483-.474.615 0 .107.127.297.382.576.228.239.287.415.18.523l-.367.337a.293.293 0 00-.161.16c-.146.201-.19.396-.141.591l.02.039-.01.025c-.005.215.048.43.156.645-.235-.371-.352-.625-.343-.752-.038-.597.118-.963.474-1.1.181-.077.249-.18.191-.312a4.723 4.723 0 01-.332-.453c-.156-.195-.23-.308-.215-.348-.005-.044.079-.17.249-.38zM20.894 43.804c-.005-.088-.064-.19-.171-.298l.038-.015c.025-.01.01-.073-.053-.185.117.137.24.239.36.308.367.213.587.356.666.428.077.074.092.148.043.215l-.596.113.103-.41-.132.4-.346-.014a.198.198 0 00.131-.171.275.275 0 00.147-.2c.03-.074.005-.118-.078-.128l-.112-.043zM22.837 41.386a.77.77 0 00.205-.428l.044-.113.146.283a2.21 2.21 0 01-.683.888c-.387.318-.308.533.23.64.136.034.326-.02.576-.156l-.04.181-.313.293c-.54.064-.878-.108-1.02-.508-.053-.196-.005-.366.147-.522.253-.157.453-.304.596-.44l.112-.118zM19.556 42.231c-.02.592.121.987.434 1.173.235.161.415.307.532.443.128.157.118.24-.033.244-.182.015-.299.02-.362.015a.918.918 0 01-.4-.126l-.216-.186.123.015c.181.077.341.087.468.029.21-.088.044-.283-.502-.59a.709.709 0 01-.2-.304 1.324 1.324 0 00-.079-.293l-.01-.453-.044.273c-.21-.601-.292-1.143-.248-1.621l.2-.337-.02.606c.02.16.098.351.22.571.087.21.137.39.137.541zM21.396 39.678l.123.015c-.24.166-.318.336-.244.517l-.005.098c.039.273.224.43.551.478.342.005.538-.084.597-.279a.644.644 0 00-.025-.43l.176.138c.044.146.009.317-.108.502-.156.284-.356.397-.591.348l-.317-.099-.415-.649.01-.03c-.02-.218.063-.423.248-.61z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M22.06 43.399l-.37-.049c.057-.044.087-.107.077-.196l-.22-.088c-.01.079-.058.118-.14.103-.065 0-.118-.131-.167-.39l-.068-.22-.02-.2c.02-.21.06-.323.108-.348-.054.133.005.308.175.523.133.161.264.284.406.361.708.435 1.172.425 1.397-.019l-.098.249-.259.156-.24.029a5.29 5.29 0 01-.581.089zM22.994 42.197c.253-.297.37-.512.361-.65.054.246.067.484.034.71-.088.116-.157.174-.2.18-.108 0-.177-.04-.21-.118l.015-.122z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M20.738 43.867a.75.75 0 00-.274-.434c-.43-.323-.674-.6-.728-.84-.058-.132-.082-.303-.082-.518s-.02-.381-.054-.508l-.181-.425-.019-.2c.029-.186.098-.35.2-.502.083-.143.259-.348.541-.621l.328-.093a1.92 1.92 0 00-.586.733c-.127.268-.167.468-.113.601.118.346.171.625.153.835-.035.18-.01.39.062.639.069.307.215.537.435.688l.302.284c.108.108.167.21.172.298l.044.371a.198.198 0 01-.132.171l-.274-.045.068-.004.074-.034c.097-.07.117-.2.063-.395z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M21.055 39.639l.151.028-.048.046c-.07.057-.113.165-.138.33l.118.275.415.648.068.157c.054.132 0 .258-.161.39-.049.02-.259.142-.625.362-.171.103-.259.284-.254.542a1.28 1.28 0 00.01.375l-.083-.277-.024-.171.01.136-.02-.039c-.049-.195-.005-.39.141-.591l.523-.498c.107-.107.048-.283-.175-.527-.255-.274-.382-.464-.382-.571-.01-.132.147-.337.474-.615z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M21.275 40.21c-.074-.181.004-.351.244-.517l.287.087a.49.49 0 00-.141.264c-.049.176 0 .294.151.351.172.049.279.03.318-.063l.078-.196c.03.294-.093.435-.37.43-.265.025-.456-.097-.567-.356zM22.48 41.47c-.307.073-.556.175-.741.318l-.084.126.01-.029c.034-.138.128-.259.284-.371.405-.264.625-.415.659-.445a.738.738 0 00.327-.483l.151.259-.043.112c-.177.23-.367.4-.563.513zM21.309 43.256l.751.143.025.013c.254.06.522.016.796-.13l.259-.157-.353.474a1.198 1.198 0 01-.79.034 1.533 1.533 0 01-.488-.23l-.2-.147z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M20.707 43.306l-.067-.156a1.431 1.431 0 01-.161-.645l.015-.025-.01-.136.023.171c-.005.063.03.175.093.331l.035.079c.175.415.576.703 1.201.869.264.087.523.083.777-.01-.26.22-.538.376-.835.473.048-.067.033-.136-.044-.214-.079-.073-.299-.216-.665-.43a1.398 1.398 0 01-.361-.307zM21.841 42.895c-.307-.19-.371-.518-.186-.981l.084-.127c.185-.142.433-.245.741-.317l.357-.084-.112.118-.313.132c-.347.116-.547.351-.6.693-.04.2.092.386.39.547.264.151.48.205.644.166l.156-.068.313-.293-.078.195c-.225.444-.688.454-1.396.019zM19.385 43.227a.766.766 0 00-.084-.356.514.514 0 01-.048-.279l.058-.395.01.454c.044.323.137.518.279.596.546.308.712.503.503.59-.128.06-.284.05-.47-.028l-.122-.015a2.672 2.672 0 01-.433-.528c.185.181.287.166.307-.039zM19.404 40.684l.01.459.053.117c-.17-.22-.233-.494-.19-.82l.405-.357c-.17.21-.263.41-.278.6zM22.431 40.869c.103-.088.186-.269.254-.542l.205.21c-.126.362-.37.542-.736.542l.277-.21z"
        fillRule="evenodd"
        fill="#4c5e8b"
      />
      <Path
        d="M17.578 4.66a1.833 1.833 0 00-1.449-.008 1.804 1.804 0 00-1.02 1.004 1.829 1.829 0 00-.007 1.449c.191.477.523.813 1.003 1.016.477.207.954.211 1.43.02a1.823 1.823 0 001.035-1.012c.207-.477.211-.953.02-1.43a1.836 1.836 0 00-1.012-1.039z"
        fillRule="evenodd"
        fill="url(#necklace_svg__bR)"
        transform="matrix(1.25 0 0 -1.25 0 50)"
      />
      <G
        clipPath="url(#necklace_svg__bS)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__bT)"
          transform="scale(.47921 -.47921) rotate(21.949 49.608 72.99)">
          <Path
            d="M18.59 5.699a1.813 1.813 0 00-1.012-1.039 1.833 1.833 0 00-1.449-.008 1.804 1.804 0 00-1.02 1.004 1.829 1.829 0 00-.007 1.449c.191.477.523.813 1.003 1.016.477.207.954.211 1.43.02a1.823 1.823 0 001.035-1.012c.207-.477.211-.953.02-1.43z"
            fill="url(#necklace_svg__Z)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <G
        clipPath="url(#necklace_svg__bU)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__bV)"
          transform="matrix(.33797 -.33971 -.27041 -.32229 -302.32 -1981.8)">
          <Path
            d="M15.473 5.848a.26.26 0 00.047.183c.074.094.195.098.367.012.211-.121.371-.281.48-.481.11-.199.09-.328-.055-.39-.132-.067-.3-.016-.507.152-.192.164-.305.34-.332.524z"
            fill="url(#necklace_svg__ac)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <Path
        d="M17.505 42.441a2.289 2.289 0 01-1.27 1.299c-.595.254-1.201.254-1.811.01a2.258 2.258 0 01-1.27-1.255 2.286 2.286 0 01-.014-1.811 2.24 2.24 0 011.255-1.27 2.227 2.227 0 011.786-.024 2.264 2.264 0 011.299 1.264 2.25 2.25 0 01.025 1.787z"
        fillRule="evenodd"
        fill="#79a9e1"
      />
      <Path
        d="M16.099 43.36c-.625-.166-1.022-.455-1.197-.87l-.02-.039a1.4 1.4 0 00.484.484c.249.121.395.19.435.205a.982.982 0 00.459.059c.293.077.556.062.791-.035l-.176.186a1.148 1.148 0 01-.776.01z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M14.931 39.37l.215-.141.171-.025c-.322.279-.483.484-.473.615 0 .107.127.299.381.571.229.245.288.42.18.528l-.361.337a.318.318 0 00-.167.161c-.14.2-.19.395-.136.587l.015.038-.01.029c0 .215.049.43.161.645-.24-.371-.35-.625-.347-.752-.039-.595.122-.962.479-1.1.181-.077.245-.18.186-.312a5.44 5.44 0 01-.333-.453c-.156-.195-.23-.308-.214-.347-.006-.043.078-.171.253-.381zM15.161 43.369c-.01-.088-.069-.19-.176-.298l.04-.015c.029-.008.009-.072-.054-.185.116.136.239.239.361.308.367.215.585.356.664.43.078.072.093.146.044.215l-.591.111.098-.41-.127.401-.351-.015a.21.21 0 00.136-.171c.083-.049.133-.118.141-.2.03-.074.005-.118-.072-.128l-.113-.043zM17.1 40.953a.765.765 0 00.205-.43l.049-.113.141.284c-.131.331-.361.63-.679.888-.385.318-.312.532.225.64.136.034.331-.02.581-.157l-.04.181-.312.293c-.541.063-.884-.108-1.025-.508a.532.532 0 01.146-.522 3.32 3.32 0 00.597-.44l.112-.117zM13.824 41.797c-.025.59.116.987.428 1.172.24.161.415.307.533.443.133.162.117.24-.034.246a2.937 2.937 0 01-.361.014c-.107 0-.24-.044-.401-.127l-.214-.185.121.014c.187.078.343.088.474.03.21-.089.039-.284-.502-.592-.108-.107-.177-.204-.2-.302a1.318 1.318 0 00-.08-.294l-.01-.454-.043.274c-.21-.601-.297-1.142-.254-1.621l.2-.338-.018.607c.023.161.097.351.223.571.089.21.133.39.138.542zM15.659 39.244l.122.013c-.239.167-.317.338-.239.518l-.004.098c.038.273.218.434.546.478.342.01.542-.082.596-.277a.66.66 0 00-.02-.425l.171.131c.049.146.015.317-.107.507-.157.28-.352.397-.592.343l-.317-.098-.415-.65.01-.028c-.015-.225.069-.425.249-.61z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M16.324 42.964l-.367-.049c.058-.044.083-.107.078-.195l-.225-.089c-.009.079-.057.118-.136.104-.064 0-.123-.132-.166-.391l-.073-.22-.015-.2c.015-.21.054-.323.107-.346-.053.13.006.302.176.522.127.161.263.278.406.356.702.439 1.171.43 1.396-.015l-.103.249-.253.156-.245.03a5.575 5.575 0 01-.58.088zM17.261 41.758c.249-.293.37-.508.357-.644.053.244.067.477.038.707-.092.118-.156.177-.2.182-.107 0-.181-.04-.215-.118l.02-.127z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M15.005 43.433a.79.79 0 00-.279-.435c-.429-.322-.674-.6-.727-.84a1.39 1.39 0 01-.083-.518c0-.214-.015-.385-.054-.507l-.18-.425-.02-.2c.034-.185.098-.352.205-.503.078-.141.26-.346.542-.62l.327-.092c-.244.18-.439.423-.586.732-.131.268-.17.469-.113.6.118.346.167.625.148.835-.03.18-.01.39.062.64.074.308.215.536.435.688l.308.283c.102.108.161.21.171.298l.044.371a.21.21 0 01-.136.171l-.274-.043.069-.005.077-.035c.093-.068.113-.2.064-.395z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M15.317 39.204l.152.03-.049.043c-.069.06-.113.167-.136.333l.116.268.415.655.069.156c.053.131 0 .259-.157.39-.053.02-.263.142-.63.361-.17.103-.253.284-.253.543a1.29 1.29 0 00.01.376l-.079-.274-.029-.176.01.132-.015-.035c-.054-.195-.005-.39.136-.59l.528-.498c.107-.108.049-.283-.18-.523-.254-.278-.381-.469-.381-.576-.01-.132.151-.337.473-.615z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M15.542 39.775c-.078-.18 0-.351.24-.517l.287.088a.494.494 0 00-.142.264c-.048.175.005.293.152.351.176.049.283.029.317-.068l.079-.19c.034.292-.089.433-.366.428-.269.025-.459-.097-.567-.356zM16.744 41.035c-.309.074-.553.176-.738.318l-.089.127.015-.03c.034-.136.128-.259.28-.371.41-.264.63-.415.663-.444a.745.745 0 00.323-.484l.156.259-.049.112c-.176.23-.361.4-.561.513zM15.571 42.822l.753.142.023.01c.26.063.523.02.797-.128l.259-.156-.352.474a1.21 1.21 0 01-.791.035 1.652 1.652 0 01-.489-.23l-.2-.147z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M14.971 42.871l-.063-.156a1.431 1.431 0 01-.162-.645l.01-.029-.01-.132.029.171c-.005.069.025.176.094.333l.034.077c.174.415.57.704 1.196.87.268.088.527.083.776-.01a2.51 2.51 0 01-.835.474c.049-.069.034-.143-.044-.215-.079-.074-.297-.215-.664-.43a1.358 1.358 0 01-.36-.308zM16.109 42.461c-.313-.191-.377-.517-.192-.981l.09-.128c.184-.14.428-.243.737-.317l.356-.083-.112.117-.313.132c-.348.123-.547.351-.601.699-.039.195.093.38.396.541.264.151.479.205.644.166l.156-.068.313-.293-.078.195c-.225.445-.694.454-1.396.02zM13.647 42.793c-.005-.157-.028-.273-.082-.357a.543.543 0 01-.05-.277l.064-.397.01.454c.043.323.136.519.278.596.542.308.708.503.503.592-.131.058-.288.048-.474-.03l-.121-.014a2.905 2.905 0 01-.435-.528c.185.18.287.165.307-.04zM13.673 40.249l.008.458.049.118c-.17-.22-.234-.493-.19-.82l.405-.356c-.17.215-.264.41-.273.6zM16.694 40.435c.104-.089.186-.269.255-.542l.205.21c-.123.36-.372.542-.738.542l.278-.21z"
        fillRule="evenodd"
        fill="#4c5e8b"
      />
      <Path
        d="M12.977 4.98a1.814 1.814 0 00-1.45-.007 1.793 1.793 0 00-1.015 1.004 1.833 1.833 0 00-.012 1.449c.191.472.527.812 1.004 1.015a1.8 1.8 0 001.43.02 1.824 1.824 0 001.039-1.012c.203-.48.211-.953.019-1.429a1.834 1.834 0 00-1.015-1.04z"
        fillRule="evenodd"
        fill="url(#necklace_svg__bW)"
        transform="matrix(1.25 0 0 -1.25 0 50)"
      />
      <G
        clipPath="url(#necklace_svg__bX)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__bY)"
          transform="scale(.47921 -.47921) rotate(21.949 -803.967 -505.162)">
          <Path
            d="M14.004 6.047a1.831 1.831 0 00-1.016-1.039A1.833 1.833 0 0011.539 5a1.806 1.806 0 00-1.016 1.004 1.829 1.829 0 00-.011 1.449c.191.477.527.813 1.004 1.016.48.207.953.211 1.429.019a1.811 1.811 0 001.039-1.011 1.8 1.8 0 00.02-1.43z"
            fillRule="evenodd"
            fill="url(#necklace_svg__bZ)"
          />
        </G>
      </G>
      <Path
        d="M9.004 37.587a2.28 2.28 0 01-1.265 1.3c-.6.253-1.205.258-1.817.014a2.256 2.256 0 01-1.268-1.255 2.291 2.291 0 01-.015-1.811 2.245 2.245 0 011.26-1.275 2.26 2.26 0 011.782-.024c.61.249 1.044.669 1.299 1.27.254.595.264 1.192.024 1.782z"
        fillRule="evenodd"
        fill="#79a9e1"
      />
      <Path
        d="M7.598 38.511c-.62-.166-1.02-.46-1.197-.875l-.02-.039c.118.2.279.362.484.49.254.12.396.19.435.204a.982.982 0 00.459.059c.292.073.556.063.791-.04l-.171.191a1.194 1.194 0 01-.781.01z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M6.431 34.516l.214-.136.176-.03c-.327.279-.489.484-.479.621 0 .107.128.298.387.572.223.243.282.415.175.522l-.362.341a.292.292 0 00-.16.162c-.147.195-.19.395-.142.586l.015.039-.01.028c0 .215.054.43.161.645-.239-.376-.351-.625-.346-.752-.04-.595.121-.961.477-1.099.182-.077.245-.18.192-.312a6.299 6.299 0 01-.338-.454c-.156-.195-.229-.308-.215-.346 0-.044.084-.172.255-.387zM6.66 38.515c-.01-.088-.069-.185-.171-.293l.04-.014c.024-.014.005-.073-.059-.185.118.136.239.233.361.307.367.21.592.356.669.43.078.073.088.146.044.21l-.595.117.097-.41-.127.4-.351-.015a.22.22 0 00.136-.17c.084-.055.132-.117.142-.2.034-.073.004-.118-.073-.127l-.113-.05zM8.599 36.104a.78.78 0 00.21-.435l.044-.108.14.284c-.13.331-.36.63-.678.889-.385.317-.313.527.225.638.136.035.332-.018.581-.156l-.039.176-.312.298c-.543.059-.884-.107-1.021-.512a.51.51 0 01.141-.518 3.4 3.4 0 00.601-.439l.108-.117zM5.322 36.949c-.025.59.122.981.43 1.171a2.8 2.8 0 01.532.44c.132.161.122.244-.034.249a2.93 2.93 0 01-.361.015c-.108 0-.239-.045-.4-.128l-.215-.185.121.014c.186.074.342.084.474.03.21-.089.04-.284-.503-.591a.697.697 0 01-.2-.308 1.247 1.247 0 00-.079-.287l-.01-.455-.043.268c-.21-.6-.293-1.137-.254-1.616l.2-.341-.014.61c.019.156.093.346.219.571.089.21.132.386.137.543zM7.159 34.395l.121.014c-.239.161-.318.337-.239.517l-.005.094c.039.272.22.434.547.482.342.005.542-.087.596-.277a.644.644 0 00-.02-.43l.171.136c.049.146.015.318-.107.504-.157.282-.352.395-.592.346l-.312-.097-.419-.65.014-.029c-.019-.225.064-.43.245-.61z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M7.822 38.115l-.366-.049c.059-.043.083-.107.078-.195l-.224-.092c-.01.082-.059.116-.138.107-.062-.005-.116-.132-.166-.391l-.072-.22-.015-.2c.02-.21.054-.328.107-.346-.053.131.005.302.177.522.126.162.263.278.404.357.708.435 1.172.43 1.397-.02l-.103.253-.253.153-.24.034a5.841 5.841 0 01-.585.087zM8.76 36.909c.249-.293.371-.508.356-.644.059.244.069.479.039.707-.088.118-.156.177-.2.177-.107 0-.18-.039-.21-.118l.015-.122z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M6.504 38.584a.765.765 0 00-.279-.434c-.429-.323-.669-.606-.727-.84a1.301 1.301 0 01-.078-.518c0-.215-.02-.386-.059-.508l-.18-.429-.015-.201c.029-.18.098-.347.2-.498.078-.141.259-.346.543-.62l.326-.097c-.244.18-.439.43-.585.732-.132.273-.166.474-.112.6.116.352.165.63.146.835-.03.187-.01.397.069.64.067.308.21.542.428.694l.308.283c.107.107.166.205.171.292l.044.376a.22.22 0 01-.136.172l-.274-.044.069-.005.077-.034c.094-.069.112-.201.064-.396z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M6.821 34.35l.147.03-.05.044c-.068.059-.112.171-.13.332l.112.273.419.655.064.156c.053.126.005.259-.157.385-.053.025-.263.148-.63.363-.17.106-.253.287-.253.546-.01.151-.01.274.015.376l-.083-.279-.03-.171.01.133-.015-.04c-.049-.19-.005-.39.141-.585l.523-.5c.107-.105.049-.282-.175-.525-.254-.274-.386-.465-.386-.572-.01-.137.15-.342.478-.621z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M7.041 34.926c-.079-.18 0-.356.239-.517l.289.084a.504.504 0 00-.138.268c-.049.175 0 .293.146.352.177.048.284.023.318-.07l.079-.194c.033.292-.088.439-.367.435-.268.019-.453-.099-.566-.358zM8.242 36.186a1.953 1.953 0 00-.737.313l-.083.132.01-.03a.669.669 0 01.278-.371c.41-.268.63-.415.664-.444a.745.745 0 00.322-.484l.156.254-.043.113c-.181.23-.366.405-.566.517zM7.07 37.974l.752.141.03.01c.253.059.517.02.79-.131l.26-.153-.352.469c-.235.102-.499.112-.791.04a1.728 1.728 0 01-.489-.23l-.2-.146z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M6.47 38.023l-.064-.157a1.431 1.431 0 01-.161-.645l.01-.028-.01-.133.03.171c-.005.064.024.176.093.328l.033.077c.177.415.577.709 1.197.875.268.083.527.083.78-.01a2.537 2.537 0 01-.834.469c.044-.064.034-.138-.044-.21-.077-.074-.302-.22-.669-.43a1.48 1.48 0 01-.361-.307zM7.607 37.608c-.312-.19-.376-.518-.185-.977l.083-.127c.185-.141.43-.249.737-.318l.357-.082-.108.117-.312.132c-.352.117-.552.35-.605.693-.04.2.092.38.395.547.263.15.478.204.645.16l.156-.063.312-.292-.078.19c-.225.45-.689.455-1.397.02zM5.146 37.944c-.005-.157-.028-.273-.082-.362a.541.541 0 01-.049-.277l.063-.391.01.455c.043.316.137.517.278.595.543.307.713.502.503.591-.131.059-.288.044-.474-.03l-.121-.014a3.056 3.056 0 01-.435-.532c.186.185.289.171.307-.035zM5.171 35.4l.01.455.049.116c-.171-.218-.23-.487-.186-.815l.4-.356c-.17.21-.263.41-.273.6zM8.199 35.586c.097-.088.18-.268.249-.542l.204.21c-.122.356-.366.537-.737.542l.284-.21z"
        fillRule="evenodd"
        fill="#4c5e8b"
      />
      <Path
        d="M6.18 8.863a1.838 1.838 0 00-1.453-.011 1.805 1.805 0 00-1.016 1.003 1.819 1.819 0 00-.008 1.45c.188.476.524.816 1.004 1.019.477.203.953.207 1.426.016a1.813 1.813 0 001.039-1.012 1.79 1.79 0 00.019-1.426A1.826 1.826 0 006.18 8.863z"
        fillRule="evenodd"
        fill="url(#necklace_svg__ca)"
        transform="matrix(1.25 0 0 -1.25 0 50)"
      />
      <G
        clipPath="url(#necklace_svg__cb)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__cc)"
          transform="scale(.47921 -.47921) rotate(21.949 -790.185 -545.798)">
          <Path
            d="M7.203 9.93a1.825 1.825 0 00-1.012-1.039 1.843 1.843 0 00-1.453-.012 1.805 1.805 0 00-1.015 1.004c-.203.48-.207.961-.012 1.449.191.477.527.816 1.008 1.02.476.203.953.207 1.426.019a1.834 1.834 0 001.039-1.016c.203-.476.211-.953.019-1.425z"
            fill="url(#necklace_svg__bZ)"
            fillRule="evenodd"
          />
        </G>
      </G>
      <Path
        d="M12.051 40.64a2.288 2.288 0 01-1.265 1.299 2.27 2.27 0 01-1.811.01 2.238 2.238 0 01-1.27-1.25 2.306 2.306 0 01-.015-1.818c.24-.59.66-1.015 1.255-1.269a2.255 2.255 0 011.787-.025c.61.25 1.04.67 1.294 1.265.259.6.264 1.197.025 1.788z"
        fillRule="evenodd"
        fill="#79a9e1"
      />
      <Path
        d="M10.65 41.558c-.625-.162-1.021-.454-1.201-.87l-.015-.038c.112.195.273.356.483.483.25.127.395.195.43.21.132.048.288.068.463.058.294.074.557.059.791-.038l-.175.185c-.25.092-.509.097-.776.01z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M9.477 37.569l.22-.138.172-.028c-.328.278-.484.483-.474.614 0 .108.126.303.38.577.23.238.289.415.181.522l-.366.337a.292.292 0 00-.161.16c-.142.202-.19.397-.137.592l.014.039-.009.03c0 .215.05.429.155.644-.233-.375-.35-.625-.34-.752-.04-.596.117-.962.473-1.098.185-.08.249-.187.19-.313a5.737 5.737 0 01-.331-.459c-.157-.191-.23-.307-.215-.342-.005-.044.077-.175.248-.385zM9.707 41.567c-.005-.087-.063-.186-.17-.292l.038-.02c.025-.01.01-.074-.054-.181.118.132.24.235.361.307.367.21.587.353.665.43.078.074.093.141.044.21l-.596.113.103-.41-.127.4-.352-.01a.206.206 0 00.132-.17c.088-.054.136-.123.146-.2.03-.079.005-.118-.078-.133l-.112-.044zM11.65 39.155a.768.768 0 00.205-.434l.045-.112.146.282c-.132.338-.361.63-.678.889-.392.318-.313.532.223.64.138.034.333-.015.582-.151l-.044.175-.313.293c-.537.064-.878-.107-1.02-.507a.534.534 0 01.147-.522c.258-.157.453-.3.595-.44l.112-.113zM8.374 39.995c-.024.596.117.986.43 1.178.233.16.415.307.532.438.126.162.116.239-.035.244-.175.015-.297.02-.361.02-.107 0-.239-.044-.4-.131l-.215-.186.122.02c.186.072.342.082.474.028.205-.087.039-.287-.508-.591a.754.754 0 01-.2-.307 1.014 1.014 0 00-.073-.288l-.01-.459-.049.274c-.21-.601-.293-1.144-.248-1.616l.2-.343-.02.605c.025.162.097.353.22.577.092.205.136.386.14.537zM10.21 37.441l.122.02c-.24.162-.317.332-.24.513l-.01.097c.045.274.225.435.553.479.341.01.537-.084.595-.274a.667.667 0 00-.019-.43l.17.133c.05.151.01.317-.106.507-.156.284-.352.395-.591.342l-.318-.093-.415-.654.01-.03c-.015-.219.064-.424.249-.61z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M10.874 41.168l-.367-.054c.06-.04.084-.103.08-.196l-.226-.088c-.01.083-.059.118-.141.108-.059-.005-.117-.137-.166-.39l-.069-.225-.019-.2c.019-.205.059-.323.108-.343-.049.128.009.302.18.522.127.157.264.28.405.357.703.435 1.172.43 1.392-.019l-.099.249-.258.156-.239.034c-.254.044-.449.074-.581.089zM11.811 39.961c.249-.293.366-.512.356-.65.054.245.07.484.035.714-.088.111-.156.17-.2.175-.107 0-.176-.039-.21-.118l.02-.12z"
        fillRule="evenodd"
        fill="#677ebc"
      />
      <Path
        d="M9.551 41.636a.74.74 0 00-.274-.435c-.43-.327-.673-.605-.727-.845-.054-.126-.084-.302-.084-.517s-.013-.381-.053-.503l-.18-.43-.02-.2c.03-.181.097-.346.205-.498.078-.142.258-.352.537-.625l.333-.093c-.25.181-.446.425-.587.732-.132.274-.171.47-.112.602.117.346.166.625.146.835-.029.18-.01.395.064.639.074.307.215.537.435.693l.302.284c.108.106.167.205.172.293l.043.376a.206.206 0 01-.132.17l-.273-.044.068-.005.079-.034c.092-.073.112-.205.058-.395z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M9.869 37.403l.151.028-.049.044c-.069.059-.112.171-.137.333l.117.273.415.649.069.156c.054.133 0 .264-.161.392a13.39 13.39 0 00-.625.36c-.172.103-.259.285-.254.543-.015.152-.01.278.009.375l-.083-.272-.024-.171.01.13-.015-.038c-.053-.195-.005-.39.137-.591l.527-.498c.108-.107.049-.283-.181-.522-.254-.274-.38-.469-.38-.577-.01-.13.146-.336.474-.615z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M10.092 37.974c-.077-.182 0-.352.24-.513l.288.083a.48.48 0 00-.141.268c-.049.172 0 .288.151.347.176.048.279.03.317-.063l.078-.196c.035.294-.088.44-.366.435-.269.02-.459-.098-.566-.361zM11.294 39.239c-.308.067-.557.17-.743.312l-.082.126.01-.023c.034-.143.126-.264.282-.377.407-.263.63-.41.66-.44a.732.732 0 00.327-.482l.152.254-.045.112c-.175.229-.366.4-.561.518zM10.123 41.025l.75.143.026.008c.259.059.522.015.795-.131l.259-.156-.352.473a1.201 1.201 0 01-.791.034 1.54 1.54 0 01-.488-.229l-.2-.142z"
        fillRule="evenodd"
        fill="#96d8fe"
      />
      <Path
        d="M9.521 41.074l-.069-.156a1.433 1.433 0 01-.154-.644l.008-.03-.008-.131.023.17c-.005.063.029.17.098.327l.03.079c.18.415.576.707 1.201.869.268.087.526.082.776-.01-.259.22-.537.376-.835.473.049-.068.034-.136-.044-.21-.078-.077-.298-.22-.665-.43a1.563 1.563 0 01-.36-.307zM10.654 40.659c-.308-.19-.37-.518-.185-.982l.082-.126c.191-.142.435-.245.743-.312l.356-.084-.113.112-.312.137c-.346.117-.546.347-.6.693-.039.2.092.382.39.548.264.146.479.2.65.161l.151-.064.318-.298-.083.196c-.22.449-.689.454-1.397.019zM8.199 40.991a.724.724 0 00-.084-.356.496.496 0 01-.049-.279l.064-.395.01.459c.044.317.136.517.273.595.547.304.713.504.508.591-.132.054-.288.044-.473-.029l-.123-.02a2.728 2.728 0 01-.435-.527c.186.181.289.171.309-.039zM8.217 38.453l.01.453.054.118c-.171-.22-.234-.494-.19-.822l.405-.35c-.171.21-.264.41-.279.6zM11.245 38.638c.103-.093.186-.274.254-.547l.205.21c-.126.362-.371.542-.738.547l.279-.21z"
        fillRule="evenodd"
        fill="#4c5e8b"
      />
      <Path
        d="M8.617 6.422a1.816 1.816 0 00-1.449-.008 1.79 1.79 0 00-1.016 1 1.838 1.838 0 00-.011 1.453c.191.473.527.813 1.004 1.016.48.203.953.211 1.429.019a1.838 1.838 0 001.039-1.011c.203-.481.207-.957.016-1.43a1.813 1.813 0 00-1.012-1.039z"
        fillRule="evenodd"
        fill="url(#necklace_svg__cd)"
        transform="matrix(1.25 0 0 -1.25 0 50)"
      />
      <G
        clipPath="url(#necklace_svg__ce)"
        transform="matrix(1.25 0 0 -1.25 0 50)">
        <G
          mask="url(#necklace_svg__cf)"
          transform="scale(.47921 -.47921) rotate(21.949 -800.768 -530.124)">
          <Path
            d="M9.641 7.488a1.83 1.83 0 00-1.012-1.039 1.816 1.816 0 00-1.449-.008 1.79 1.79 0 00-1.016 1 1.845 1.845 0 00-.012 1.454A1.81 1.81 0 007.156 9.91c.477.203.953.211 1.43.02.488-.2.832-.535 1.035-1.012.207-.48.211-.957.02-1.43z"
            fill="url(#necklace_svg__bZ)"
            fillRule="evenodd"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgNecklace;
