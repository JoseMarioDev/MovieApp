# outputs

output "movieapp_bucket_name" {
  value = aws_s3_bucket.movieapp_s3_bucket.id
}

