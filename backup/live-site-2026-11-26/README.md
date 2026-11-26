# Live site backup (26 Nov 2026)

An exact copy of the 28 files that served https://grandeuradvisory.com on 26 November 2026.

- Source: S3 bucket `grandeuradvisory.com` (eu-central-1), served through CloudFront distribution `E1N3OSAE5ZBZP8`.
- These are the **built** files (compiled React/Vite output), not the editable source code.
- Each file's size and MD5 checksum matched the S3 object's size and ETag when backed up.

To restore: upload this folder's contents (except this README) to the bucket root, then invalidate `/*` on the CloudFront distribution.
