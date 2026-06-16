/* Tweaks island — drives the vanilla page via CSS vars + attributes.
   Variations requested: hero layout + color/theme. */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "navy",
  "darkSurface": "black",
  "heroLayout": "split",
  "showMarquee": true
}/*EDITMODE-END*/;

const ACCENTS = {
  navy:   ["#0A3B58", "#0C4A6E"],
  teal:   ["#0E7490", "#155E75"],
  violet: ["#6D4AFF", "#5B34D6"]
};

function TweaksApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const r = document.documentElement;
    const [a, a2] = ACCENTS[t.accentColor] || ACCENTS.navy;
    r.style.setProperty("--accent", a);
    r.style.setProperty("--accent-2", a2);
    r.style.setProperty("--dark-bg", t.darkSurface === "navy" ? "#0A3B58" : "#0E0E0E");
    document.body.setAttribute("data-hero", t.heroLayout);
    const mq = document.querySelector(".marquee");
    if (mq) mq.style.display = t.showMarquee ? "" : "none";
  }, [t]);

  return (
    <TweaksPanel>
      <TweakSection label="Layout" />
      <TweakRadio
        label="Hero layout" value={t.heroLayout}
        options={["split", "centered"]}
        onChange={(v) => setTweak("heroLayout", v)}
      />
      <TweakToggle
        label="Skills marquee" value={t.showMarquee}
        onChange={(v) => setTweak("showMarquee", v)}
      />
      <TweakSection label="Color" />
      <TweakColor
        label="Accent" value={ACCENTS[t.accentColor][0]}
        options={[ACCENTS.navy[0], ACCENTS.teal[0], ACCENTS.violet[0]]}
        onChange={(v) => {
          const key = Object.keys(ACCENTS).find((k) => ACCENTS[k][0] === v) || "navy";
          setTweak("accentColor", key);
        }}
      />
      <TweakRadio
        label="Dark surfaces" value={t.darkSurface}
        options={["black", "navy"]}
        onChange={(v) => setTweak("darkSurface", v)}
      />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById("tweaks-root")).render(<TweaksApp />);
