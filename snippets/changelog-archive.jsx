// Recent updates stay outside this client component so their text is present
// in the initial HTML. Older media mounts only when its batch is revealed.
export const ChangelogArchive = ({ children, anchors, pageSize = 10 }) => {
  const [visible, setVisible] = useState(0);
  const pendingAnchor = useRef(null);
  const focusNext = useRef(false);
  const entries = (Array.isArray(children) ? children : [children]).filter(
    (child) => child && typeof child !== "string",
  );
  useEffect(() => {
    const reveal = () => {
      let hash;
      try { hash = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
      const index = anchors.findIndex((group) => group.includes(hash));
      if (index < 0) return;
      // Existing targets already participate in normal fragment navigation.
      // Do not retain an old hash that could hijack the next Load action.
      if (document.getElementById(hash)) { pendingAnchor.current = null; return; }
      pendingAnchor.current = hash;
      setVisible((count) => Math.max(count, Math.ceil((index + 1) / pageSize) * pageSize));
    };
    reveal();
    window.addEventListener("hashchange", reveal);
    return () => window.removeEventListener("hashchange", reveal);
  }, [anchors, pageSize]);
  useEffect(() => {
    if (!pendingAnchor.current) return;
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(pendingAnchor.current);
      target?.scrollIntoView();
      if (target && focusNext.current) {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
      pendingAnchor.current = null;
      focusNext.current = false;
    });
    return () => cancelAnimationFrame(frame);
  }, [visible]);
  return <>
    <div id="changelog-older-updates" data-visible-groups={Math.min(visible, entries.length)}>{entries.slice(0, visible)}</div>
    {visible < entries.length && <div className="not-prose my-8 flex justify-center">
      <button type="button" aria-controls="changelog-older-updates" className="rounded-lg border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-900" onClick={() => {
        pendingAnchor.current = anchors[visible]?.[0];
        focusNext.current = true;
        setVisible((count) => count + pageSize);
      }}>Load older updates</button>
    </div>}
    <span className="sr-only" role="status">{visible ? `${Math.min(visible, entries.length)} older release dates loaded` : ""}</span>
  </>;
};
