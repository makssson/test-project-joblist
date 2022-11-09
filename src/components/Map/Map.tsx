import { useCallback, useRef } from "react";
import { GoogleMap } from "@react-google-maps/api";
import style from "./Map.module.scss";

const containerStyle = {
  width: "372px",
  height: "200px",
};

type Props = {
  center: {
    lat: number;
    lng: number;
  };
};

const Map = (props: Props) => {
  const { center } = props;
  const mapRef = useRef(undefined);

  const onLoad = useCallback(function callback(map: any) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback() {
    mapRef.current = undefined;
  }, []);

  return (
    <div className={style.container}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={4}
        onLoad={onLoad}
        onUnmount={onUnmount}
      ></GoogleMap>
    </div>
  );
};

export default Map;
