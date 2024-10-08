# Handling Images

### BCImage example

```javascript
<BcImage
  src={obj.image.urlTemplate}
  width={500}
  height={500}
/>
```

### BCImage with sizing

```javascript
<BcImage
  src={obj.image.urlTemplate}
  width={500}
  height={500}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### WebDAV and Image Manager examples

```javascript
import { contentImageUrl, imageManagerImageUrl } from '~/lib/store-assets';
import { BcImage } from '../bc-image';

{/* Loads a WebDAV content image with dynamic srcset support */}
<BcImage src={contentImageUrl("myimage.png")} width={500} />

{/* Loads an Image Manager image, but all loaded URLs will use "500w" size */}
<BcImage src={imageManagerImageUrl("myimage.png", "500w")} width={500} />
```